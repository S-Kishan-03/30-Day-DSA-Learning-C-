
import React from 'react';
import type { Day } from '../types.ts';

interface SidebarProps {
  plan: Day[];
  selectedDay: Day;
  onSelectDay: (day: Day) => void;
}

const ProgressBar: React.FC<{ progress: number }> = ({ progress }) => {
    return (
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
                className="bg-sky-500 h-2.5 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};

const Sidebar: React.FC<SidebarProps> = ({ plan, selectedDay, onSelectDay }) => {
  const progress = (selectedDay.day / 30) * 100;

  return (
    <aside className="w-full md:w-72 bg-gray-900/70 backdrop-blur-sm border-r border-gray-700/50 flex flex-col flex-shrink-0">
      <div className="p-4 border-b border-gray-700/50">
        <h1 className="text-xl font-bold text-white">DSA 30-Day Plan</h1>
        <p className="text-sm text-gray-400 mt-1">C# Interview Focus</p>
      </div>
      <div className="flex-1 overflow-y-auto p-2">
        <nav className="flex flex-col gap-1">
          {plan.map((day) => (
            <button
              key={day.day}
              onClick={() => onSelectDay(day)}
              className={`flex items-center justify-between w-full px-3 py-2 text-left rounded-md transition-colors duration-200 ${
                selectedDay.day === day.day
                  ? 'bg-sky-500/20 text-sky-300'
                  : 'text-gray-300 hover:bg-gray-700/50 hover:text-white'
              }`}
            >
              <span className="font-medium">
                Day {day.day}: {day.title}
              </span>
              {day.isReviewDay && (
                <span className="text-xs font-semibold bg-yellow-500/20 text-yellow-300 px-2 py-0.5 rounded-full">
                  Review
                </span>
              )}
            </button>
          ))}
        </nav>
      </div>
      <div className="p-4 border-t border-gray-700/50">
        <div className="flex justify-between items-center mb-2 text-sm">
            <span className="font-semibold text-gray-300">Progress</span>
            <span className="font-mono text-sky-400">{selectedDay.day} / 30</span>
        </div>
        <ProgressBar progress={progress} />
      </div>
    </aside>
  );
};

export default Sidebar;