
import React from 'react';
import type { Day, Topic } from '../types';
import { dailyMicroRoutine } from '../types';
import TopicCard from './TopicCard';
import { SparklesIcon } from './Icons';

interface DayViewProps {
  day: Day;
  onStartLearning: (topic: Topic) => void;
}

const ReviewDayCard: React.FC<{ notes: string }> = ({ notes }) => (
    <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-xl p-8 text-center shadow-lg">
        <SparklesIcon className="w-12 h-12 mx-auto text-yellow-400 mb-4" />
        <h2 className="text-3xl font-bold text-yellow-300">Mock Interview & Review Day</h2>
        <p className="mt-4 text-lg text-yellow-200 max-w-2xl mx-auto">
            {notes}
        </p>
    </div>
);

const DailyMicroRoutine: React.FC = () => (
    <div className="mt-12">
        <h3 className="text-2xl font-bold text-gray-200 mb-6">Daily Micro-Routine</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyMicroRoutine.map((item, index) => (
                <div key={index} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                    <div className="font-semibold text-sky-400">{item.title}</div>
                    <div className="text-sm text-gray-400 mb-2">{item.duration}</div>
                    <p className="text-gray-300 text-sm">{item.description}</p>
                </div>
            ))}
        </div>
    </div>
);

const DayView: React.FC<DayViewProps> = ({ day, onStartLearning }) => {
  return (
    <div className="w-full max-w-5xl mx-auto">
      <header className="mb-8">
        <p className="text-sm font-semibold text-sky-400 uppercase tracking-wider">Day {day.day}</p>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mt-2">{day.title}</h1>
      </header>

      {day.isReviewDay ? (
        <ReviewDayCard notes={day.notes || ''} />
      ) : (
        <>
            <div className="space-y-8">
                {day.topics.map((topic, index) => (
                    <TopicCard key={index} topic={topic} onStartLearning={onStartLearning} />
                ))}
            </div>
            <DailyMicroRoutine />
        </>
      )}
    </div>
  );
};

export default DayView;
