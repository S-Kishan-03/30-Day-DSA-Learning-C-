
import React from 'react';
import type { Topic } from '../types';
import { BrainIcon, CodeBracketIcon, ChartBarIcon, LightBulbIcon } from './Icons';

interface TopicCardProps {
  topic: Topic;
  onStartLearning: (topic: Topic) => void;
}

const TopicCard: React.FC<TopicCardProps> = ({ topic, onStartLearning }) => {
  return (
    <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl shadow-lg p-6 backdrop-blur-sm flex flex-col">
      <h3 className="text-2xl font-bold text-sky-400 mb-6 flex items-center">
        <ChartBarIcon className="w-7 h-7 mr-3 text-sky-500" />
        {topic.name}
      </h3>

      <div className="space-y-6 flex-grow">
        <div>
          <h4 className="text-lg font-semibold text-gray-200 mb-3 flex items-center">
            <BrainIcon className="w-5 h-5 mr-2 text-gray-400" />
            Key Patterns
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
            {topic.patterns.map((pattern, index) => (
              <li key={index}>{pattern}</li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-gray-200 mb-3 flex items-center">
            <CodeBracketIcon className="w-5 h-5 mr-2 text-gray-400" />
            Practice Problems
          </h4>
          <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
            {topic.practice.map((problem, index) => (
              <li key={index}>{problem}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-8 pt-6 border-t border-gray-700/50">
          <button
            onClick={() => onStartLearning(topic)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-sky-600 hover:bg-sky-500 text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <LightBulbIcon className="w-5 h-5" />
            Start Learning Module
          </button>
      </div>
    </div>
  );
};

export default TopicCard;
