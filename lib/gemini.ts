import { GoogleGenAI, Type } from "@google/genai";
import type { Topic, LearningContent } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

// This schema must match the LearningContent interface in types.ts
const learningContentSchema = {
  type: Type.OBJECT,
  properties: {
    keyTakeaways: {
      type: Type.ARRAY,
      items: { type: Type.STRING },
      description: "A bulleted list of 3-5 crucial takeaways for this topic. Keep them concise and actionable for interviews.",
    },
    coreConcept: {
      type: Type.STRING,
      description: "A clear, concise explanation of what the topic is. Explain its importance and when it's typically used in problem-solving and technical interviews. Use markdown for formatting if needed.",
    },
    keyPatterns: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          name: { type: Type.STRING, description: "Name of the pattern." },
          intuition: { type: Type.STRING, description: "The core idea behind this pattern in simple terms." },
          useCase: { type: Type.STRING, description: "A common use case or type of problem where this pattern is applied." },
        },
        required: ['name', 'intuition', 'useCase'],
      },
    },
    csharpImplementation: {
      type: Type.OBJECT,
      properties: {
        description: { type: Type.STRING, description: "A brief description of the code example provided below." },
        code: { type: Type.STRING, description: "A clean, well-commented, and idiomatic C# code example. IMPORTANT: The code MUST be formatted with appropriate newlines (using '\\n') and indentation for readability, as if it were written in an IDE like Visual Studio." },
      },
      required: ['description', 'code'],
    },
    problemWalkthrough: {
      type: Type.OBJECT,
      properties: {
        problemName: { type: Type.STRING, description: "The name of the practice problem being walked through." },
        thoughtProcess: {
          type: Type.ARRAY,
          items: { type: Type.STRING },
          description: "A bulleted list detailing the step-by-step thought process for arriving at the solution. Break down the logic clearly.",
        },
        solutionCode: { type: Type.STRING, description: "The complete, clean C# solution for the problem. IMPORTANT: The code MUST be formatted with appropriate newlines (using '\\n') and indentation for readability, as if it were written in an IDE like Visual Studio." },
      },
      required: ['problemName', 'thoughtProcess', 'solutionCode'],
    },
    complexityAnalysis: {
      type: Type.OBJECT,
      properties: {
        time: { type: Type.STRING, description: "The time complexity (e.g., 'O(n)')." },
        space: { type: Type.STRING, description: "The space complexity (e.g., 'O(1)')." },
        explanation: { type: Type.STRING, description: "A brief explanation for why the complexities are what they are." },
      },
      required: ['time', 'space', 'explanation'],
    },
    practiceProblems: {
        type: Type.ARRAY,
        description: "A list of 3-4 additional practice problems for the user to solve, like a homework assignment. Vary the difficulty.",
        items: {
            type: Type.OBJECT,
            properties: {
                name: { type: Type.STRING, description: "Name of the practice problem (e.g., 'Two Sum')." },
                difficulty: { type: Type.STRING, description: "Difficulty of the problem: 'Easy', 'Medium', or 'Hard'." },
                description: { type: Type.STRING, description: "A LeetCode-style problem description explaining the task, constraints, etc." },
                examples: {
                    type: Type.ARRAY,
                    description: "An array of 1-2 examples with input and expected output.",
                    items: {
                        type: Type.OBJECT,
                        properties: {
                          input: { type: Type.STRING, description: "Example input, e.g., 'nums = [2, 7, 11, 15], target = 9'" },
                          output: { type: Type.STRING, description: "Corresponding example output, e.g., '[0, 1]'" },
                        },
                        required: ['input', 'output'],
                    },
                },
                hint: { type: Type.STRING, description: "A one-sentence hint to guide the user if they're stuck." },
            },
            required: ['name', 'difficulty', 'description', 'examples', 'hint'],
        },
    },
  },
  required: ['keyTakeaways', 'coreConcept', 'keyPatterns', 'csharpImplementation', 'problemWalkthrough', 'complexityAnalysis', 'practiceProblems'],
};


export const generateLearningContent = async (topic: Topic): Promise<LearningContent> => {
    const prompt = `
        You are an expert C# developer and world-class instructor creating a learning module for a developer preparing for a technical interview.
        The topic is: "${topic.name}".
        Focus on these specific patterns: ${topic.patterns.join(', ')}.
        Select this problem for the walkthrough: "${topic.practice[0]}".
        
        Generate a comprehensive guide based on the provided JSON schema. Ensure all fields are filled with high-quality, accurate, and easy-to-understand content.
        The C# code you generate must be idiomatic, clean, and well-formatted. Specifically, use newline characters (\\n) and appropriate indentation within the code strings to ensure readability, mimicking the format of a well-structured C# file in Visual Studio.

        For the 'practiceProblems' section, provide 3-4 relevant problems from this list if appropriate, or other classic problems related to the topic: ${topic.practice.join(', ')}. 
        For each practice problem, create a LeetCode-style experience:
        1. Write a clear 'description' of the problem.
        2. Provide 1-2 'examples' with clear 'input' and 'output' values.
        3. Include a mix of difficulties ('Easy', 'Medium', 'Hard').
        4. Provide a concise 'hint' for each.
        This is like a homework assignment for the user.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
            config: {
                responseMimeType: 'application/json',
                responseSchema: learningContentSchema,
            },
        });

        const jsonText = response.text.trim();
        return JSON.parse(jsonText) as LearningContent;
    } catch (error) {
        console.error('Gemini API call failed or JSON parsing failed:', error);
        throw new Error('Failed to generate content from Gemini API.');
    }
};