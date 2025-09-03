import React from 'react';

// Used in: TopicCard, LearningModal
export const BrainIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.475 2.118A2.25 2.25 0 0 1 1 18c0-5.962 4.042-10.635 9-12.067a2.25 2.25 0 0 1 2.5 0c4.958 1.432 9 6.105 9 12.067a2.25 2.25 0 0 1-1.275 2.118 2.25 2.25 0 0 1-2.475-2.118 3 3 0 0 0-5.78-1.128c-.287.653.217 1.451.93 1.451a3 3 0 0 0 2.39-1.182c.233-.356.51-.66.832-.918l.12-.091c.31-.24.705-.398 1.128-.398a2.625 2.625 0 0 1 2.625 2.625 2.625 2.625 0 0 1-2.625 2.625H16.5c-.381 0-.745-.158-1.025-.434l-.121-.121a3 3 0 0 0-4.242 0c-.39.39-.93.585-1.48.585h-.001c-.55 0-1.09-.195-1.48-.585a3 3 0 0 0-4.243 0l-.12.121a2.625 2.625 0 0 1-1.026.434h-1.5c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5H6c.381 0 .745.158 1.025.434l.121.121a3 3 0 0 0 4.242 0c.39-.39.93-.585 1.48-.585h.001c.55 0 1.09.195 1.48.585a3 3 0 0 0 4.243 0l.12-.121a2.625 2.625 0 0 1 1.026-.434h1.5c.828 0 1.5.672 1.5 1.5s-.672 1.5-1.5 1.5H18a3 3 0 0 0-2.39 1.182c-.233.356-.51-.66-.832-.918l-.12.091c-.31-.24-.705-.398-1.128-.398a2.625 2.625 0 0 1-2.625-2.625 2.625 2.625 0 0 1 2.625-2.625z" />
    </svg>
);

// Used in: TopicCard
export const CodeBracketIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.25 9.75 16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0 0 20.25 18V6A2.25 2.25 0 0 0 18 3.75H6A2.25 2.25 0 0 0 3.75 6v12A2.25 2.25 0 0 0 6 20.25Z" />
    </svg>
);

// Used in: TopicCard, LearningModal
export const ChartBarIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
    </svg>
);

// Used in: TopicCard, LearningModal
export const LightBulbIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 0 0 1.5-.189m-1.5.189a6.01 6.01 0 0 1-1.5-.189m3.75 7.478a12.06 12.06 0 0 1-4.5 0m3.75 2.311a7.5 7.5 0 0 1-7.5 0c.407-.22.842-.421 1.29-.6M12 6.75a2.25 2.25 0 0 1 2.25 2.25v1.06c0 .554.224 1.07.622 1.454.4.384.82.723 1.254 1.022a.75.75 0 0 1-.298 1.406c-.464.195-.94.341-1.428.445a.75.75 0 0 1-.516-.642v-1.06c0-.554-.224-1.07-.622-1.454a4.903 4.903 0 0 0-1.88-1.055A4.903 4.903 0 0 0 8.046 9.81c-.554.4-1.07.622-1.454.622v1.06c0 .554.224 1.07.622 1.454.4.384.82.723 1.254 1.022a.75.75 0 0 1-.298 1.406c-.464.195-.94.341-1.428.445a.75.75 0 0 1-.516-.642v-1.06c0-.554-.224-1.07-.622-1.454a4.903 4.903 0 0 0-1.88-1.055A4.903 4.903 0 0 0 3.75 9.81c-.554.4-1.07.622-1.454.622v-1.06a2.25 2.25 0 0 1 2.25-2.25c.554 0 1.07-.224 1.454-.622a4.903 4.903 0 0 0 1.055-1.88A4.903 4.903 0 0 0 9.81 3.75c.4-.554.622-1.07.622-1.454V2.25a2.25 2.25 0 0 1 2.25 2.25c0 .554-.224 1.07-.622 1.454a4.903 4.903 0 0 0-1.055 1.88A4.903 4.903 0 0 0 12 9.81v-3.06Z" />
    </svg>
);

// Used in: DayView
export const SparklesIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
);

// Used in: LearningModal
export const XMarkIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
);

// Used in: LearningModal
export const CheckIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
);

// Used in: LearningModal (Practice Problems)
export const ClipboardDocumentListIcon: React.FC<{ className?: string }> = ({ className = "w-6 h-6" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 5.25 6h.008a2.25 2.25 0 0 1 2.242 2.135 2.25 2.25 0 0 0 2.135 2.242m-5.384 0a2.251 2.251 0 0 0-2.135 2.242 2.25 2.25 0 0 0 2.135 2.242m10.5 0a2.25 2.25 0 0 0 2.242-2.135 2.25 2.25 0 0 0-2.242-2.135m0 0a2.251 2.251 0 0 1-2.242-2.135 2.25 2.25 0 0 1 2.242-2.135" />
    </svg>
);