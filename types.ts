export interface Topic {
  name: string;
  patterns: string[];
  practice: string[];
}

export interface Day {
  day: number;
  title: string;
  isReviewDay: boolean;
  topics: Topic[];
  notes?: string;
}

export const dailyMicroRoutine: { title: string; duration: string; description: string }[] = [
    { title: "Revise Patterns", duration: "10–15 min", description: "Revise patterns & one example walkthrough." },
    { title: "Implement in C#", duration: "30–45 min", description: "Implement base data structure / algorithm in C# (hand-written & compile)." },
    { title: "Solve Problems", duration: "60–90 min", description: "Solve 2–3 problems on LeetCode/GfG; timeboxed (30–45m per problem)." },
    { title: "Review & Note", duration: "10–15 min", description: "Note mistakes, write succinct patterns learned." },
];

export interface PracticeProblemExample {
  input: string;
  output: string;
}

export interface PracticeProblem {
  name: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  description: string;
  examples: PracticeProblemExample[];
  hint: string;
}

export interface LearningContent {
  keyTakeaways: string[];
  coreConcept: string;
  keyPatterns: {
    name: string;
    intuition: string;
    useCase: string;
  }[];
  csharpImplementation: {
    description: string;
    code: string;
  };
  problemWalkthrough: {
    problemName: string;
    thoughtProcess: string[];
    solutionCode: string;
  };
  complexityAnalysis: {
    time: string;
    space: string;
    explanation: string;
  };
  practiceProblems: PracticeProblem[];
}