
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar.tsx';
import DayView from './components/DayView.tsx';
import { dsaPlan } from './data/plan.ts';
import type { Day, Topic, LearningContent } from './types.ts';
import LearningModal from './components/LearningModal.tsx';
import { generateLearningContent } from './lib/gemini.ts';

interface ModalState {
  isOpen: boolean;
  topic: Topic | null;
  content: LearningContent | null;
  isLoading: boolean;
  error: string | null;
}

const App: React.FC = () => {
  const [selectedDay, setSelectedDay] = useState<Day>(dsaPlan[0]);
  const [modalState, setModalState] = useState<ModalState>({
    isOpen: false,
    topic: null,
    content: null,
    isLoading: false,
    error: null,
  });
  const [learningContentCache, setLearningContentCache] = useState<Map<string, LearningContent>>(new Map());

  useEffect(() => {
    if (modalState.topic && modalState.isOpen && !modalState.content && !modalState.isLoading) {
      const fetchContent = async () => {
        setModalState(prev => ({ ...prev, isLoading: true, error: null }));
        try {
          const content = await generateLearningContent(modalState.topic!);
          setLearningContentCache(prevCache => new Map(prevCache).set(modalState.topic!.name, content));
          setModalState(prev => ({ ...prev, content, isLoading: false }));
        } catch (error) {
          console.error("Failed to generate learning content:", error);
          setModalState(prev => ({ ...prev, error: 'Failed to load content. Please try again later.', isLoading: false }));
        }
      };
      fetchContent();
    }
  }, [modalState.topic, modalState.isOpen, modalState.content, modalState.isLoading]);

  const handleSelectDay = (day: Day) => {
    setSelectedDay(day);
  };

  const handleStartLearning = (topic: Topic) => {
    if (learningContentCache.has(topic.name)) {
        setModalState({
          isOpen: true,
          topic,
          content: learningContentCache.get(topic.name)!,
          isLoading: false,
          error: null,
        });
    } else {
        setModalState({
          isOpen: true,
          topic,
          content: null,
          isLoading: false, // Will be set to true in useEffect
          error: null,
        });
    }
  };

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      topic: null,
      content: null,
      isLoading: false,
      error: null,
    });
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-900 text-gray-200 font-sans">
      <Sidebar
        plan={dsaPlan}
        selectedDay={selectedDay}
        onSelectDay={handleSelectDay}
      />
      <main className="flex-1 p-4 md:p-8 overflow-y-auto">
        <DayView day={selectedDay} onStartLearning={handleStartLearning} />
      </main>
      {modalState.isOpen && (
        <LearningModal
          topic={modalState.topic!}
          content={modalState.content}
          isLoading={modalState.isLoading}
          error={modalState.error}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default App;