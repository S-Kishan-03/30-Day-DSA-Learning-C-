
import React, { useEffect, useRef } from 'react';
import type { Topic, LearningContent } from '../types.ts';
import { XMarkIcon, LightBulbIcon, BrainIcon, CodeBracketIcon, ChartBarIcon, CheckIcon, ClipboardDocumentListIcon } from './Icons.tsx';

interface LearningModalProps {
  topic: Topic;
  content: LearningContent | null;
  isLoading: boolean;
  error: string | null;
  onClose: () => void;
}

// Add this to handle the hljs object from the global scope
declare global {
    interface Window {
        hljs: {
            highlightElement: (element: HTMLElement) => void;
        };
    }
}

const LoadingSpinner: React.FC = () => (
    <div className="flex flex-col items-center justify-center text-center text-gray-400 h-full">
        <BrainIcon className="w-16 h-16 text-sky-500 animate-pulse mb-6" />
        <h3 className="text-2xl font-semibold text-gray-200">Generating Learning Module...</h3>
        <p className="mt-2 max-w-md">Our AI is crafting a personalized guide for you. This may take a moment, please be patient.</p>
    </div>
);

const ErrorDisplay: React.FC<{ message: string }> = ({ message }) => (
    <div className="flex items-center justify-center h-full">
      <div className="text-center text-red-400 bg-red-900/30 p-8 rounded-lg">
          <h3 className="text-xl font-semibold">An Error Occurred</h3>
          <p className="mt-2">{message}</p>
      </div>
    </div>
);

const CodeBlock: React.FC<{ code: string }> = ({ code }) => {
    const codeRef = useRef<HTMLElement>(null);
    // The AI model sometimes uses "@" for newlines in code blocks. This is a fallback.
    const formattedCode = code.replace(/@/g, '\n');

    useEffect(() => {
        if (codeRef.current && window.hljs) {
            // Tell highlight.js to highlight this specific element
            window.hljs.highlightElement(codeRef.current);
        }
    }, [formattedCode]); // Rerun highlighting when the code content changes

    return (
        // The `hljs` class is used by the theme for styling.
        // The theme will provide the background color and text colors.
        <pre className="hljs p-4 rounded-lg my-2 overflow-auto min-h-72 max-h-[500px] text-base border border-gray-700/50">
            <code ref={codeRef} className="csharp">
                {formattedCode}
            </code>
        </pre>
    );
};

const LearningModal: React.FC<LearningModalProps> = ({ topic, content, isLoading, error, onClose }) => {
    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-fade-in"
            aria-labelledby="learning-modal-title"
            role="dialog"
            aria-modal="true"
        >
            <div className="bg-gray-800 border border-gray-700 rounded-2xl shadow-2xl w-full max-w-4xl h-[90vh] flex flex-col">
                <header className="flex items-center justify-between p-4 border-b border-gray-700 flex-shrink-0">
                    <h2 id="learning-modal-title" className="text-2xl font-bold text-sky-400 flex items-center gap-3">
                        <LightBulbIcon className="w-7 h-7"/>
                        Learning Module: {topic.name}
                    </h2>
                    <button 
                        onClick={onClose} 
                        className="p-2 rounded-full hover:bg-gray-700 transition-colors"
                        aria-label="Close modal"
                    >
                        <XMarkIcon className="w-6 h-6 text-gray-400" />
                    </button>
                </header>
                <div className="flex-1 p-6 overflow-y-auto">
                    {isLoading && <LoadingSpinner />}
                    {error && <ErrorDisplay message={error} />}
                    {!isLoading && !error && content && (
                        <div className="space-y-8">
                            <section>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-300">
                                    <CheckIcon className="w-6 h-6" /> Key Takeaways
                                </h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-300 pl-2">
                                    {content.keyTakeaways.map((takeaway, i) => <li key={i}>{takeaway}</li>)}
                                </ul>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-300">
                                    <BrainIcon className="w-6 h-6" /> Core Concept
                                </h3>
                                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap">{content.coreConcept}</p>
                            </section>
                            
                            <section>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-300">
                                    <LightBulbIcon className="w-6 h-6" /> Key Patterns
                                </h3>
                                <div className="space-y-4">
                                    {content.keyPatterns.map((pattern, i) => (
                                        <div key={i} className="bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                                            <h4 className="font-bold text-gray-100">{pattern.name}</h4>
                                            <p className="text-sm text-gray-400 mt-1"><strong className="text-gray-300">Intuition:</strong> {pattern.intuition}</p>
                                            <p className="text-sm text-gray-400 mt-1"><strong className="text-gray-300">Use Case:</strong> {pattern.useCase}</p>
                                        </div>
                                    ))}
                                </div>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-300">
                                    <CodeBracketIcon className="w-6 h-6" /> C# Implementation
                                </h3>
                                <p className="text-gray-300 mb-2">{content.csharpImplementation.description}</p>
                                <CodeBlock code={content.csharpImplementation.code} />
                            </section>
                            
                            <section>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-300">
                                     <CodeBracketIcon className="w-6 h-6" /> Problem Walkthrough: {content.problemWalkthrough.problemName}
                                </h3>
                                <h4 className="font-semibold text-gray-200 mt-4 mb-2">Thought Process:</h4>
                                <ul className="list-decimal list-inside space-y-2 text-gray-300 pl-2">
                                    {content.problemWalkthrough.thoughtProcess.map((step, i) => <li key={i}>{step}</li>)}
                                </ul>
                                <h4 className="font-semibold text-gray-200 mt-4 mb-2">Solution Code:</h4>
                                <CodeBlock code={content.problemWalkthrough.solutionCode} />
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-300">
                                    <ChartBarIcon className="w-6 h-6" /> Complexity Analysis
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-gray-800/50 p-4 rounded-lg border border-gray-700/50">
                                    <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Time Complexity</h4>
                                        <p className="font-mono text-lg text-green-400">{content.complexityAnalysis.time}</p>
                                    </div>
                                     <div>
                                        <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider">Space Complexity</h4>
                                        <p className="font-mono text-lg text-blue-400">{content.complexityAnalysis.space}</p>
                                    </div>
                                </div>
                                 <p className="text-gray-400 mt-3 text-sm">{content.complexityAnalysis.explanation}</p>
                            </section>

                            <section>
                                <h3 className="text-xl font-semibold mb-3 flex items-center gap-2 text-sky-300">
                                    <ClipboardDocumentListIcon className="w-6 h-6" /> Homework: Practice Problems
                                </h3>
                                <div className="space-y-3">
                                    {content.practiceProblems.map((problem, i) => {
                                        const difficultyColor = {
                                            'Easy': 'text-green-400 bg-green-900/50 border-green-700/50',
                                            'Medium': 'text-yellow-400 bg-yellow-900/50 border-yellow-700/50',
                                            'Hard': 'text-red-400 bg-red-900/50 border-red-700/50',
                                        }[problem.difficulty] || 'text-gray-400 bg-gray-700';

                                        return (
                                            <details key={i} className="bg-gray-800/50 rounded-lg border border-gray-700/50 transition-all duration-300 open:bg-gray-700/40">
                                                <summary className="p-4 cursor-pointer flex justify-between items-center list-none">
                                                    <h4 className="font-semibold text-gray-100">{problem.name}</h4>
                                                    <div className="flex items-center gap-2">
                                                        <span className={`text-xs font-bold px-2 py-1 rounded-full border ${difficultyColor}`}>
                                                            {problem.difficulty}
                                                        </span>
                                                        <svg className="w-4 h-4 text-gray-400 transition-transform transform details-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" /></svg>
                                                    </div>
                                                </summary>
                                                <div className="p-4 border-t border-gray-700/50">
                                                    <p className="text-gray-300 mb-4 whitespace-pre-wrap">{problem.description}</p>
                                                    
                                                    {problem.examples.map((example, j) => (
                                                        <div key={j} className="mb-3">
                                                            <h5 className="font-semibold text-gray-200 text-sm">Example {j + 1}:</h5>
                                                            <div className="bg-gray-900/70 p-3 rounded-md mt-1 font-mono text-sm text-gray-300 border border-gray-700">
                                                                <p><strong className="text-gray-400">Input:</strong> {example.input}</p>
                                                                <p><strong className="text-gray-400">Output:</strong> {example.output}</p>
                                                            </div>
                                                        </div>
                                                    ))}
                                                    
                                                    <details className="mt-4 text-sm">
                                                        <summary className="cursor-pointer text-gray-400 hover:text-gray-200 transition-colors">Show Hint</summary>
                                                        <p className="pt-2 text-gray-300">{problem.hint}</p>
                                                    </details>
                                                </div>
                                            </details>
                                        );
                                    })}
                                </div>
                            </section>
                        </div>
                    )}
                </div>
            </div>
            <style>{`
              @keyframes fade-in {
                from { opacity: 0; }
                to { opacity: 1; }
              }
              .animate-fade-in {
                animation: fade-in 0.3s ease-out;
              }
              details > summary {
                list-style: none;
              }
              details > summary::-webkit-details-marker {
                display: none;
              }
              details .details-arrow {
                transition: transform 0.2s;
              }
              details[open] .details-arrow {
                transform: rotate(180deg);
              }
            `}</style>
        </div>
    );
};

export default LearningModal;