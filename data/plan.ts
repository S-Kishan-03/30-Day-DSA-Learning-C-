
import type { Day } from '../types';

export const dsaPlan: Day[] = [
  // Week 1
  {
    day: 1,
    title: 'Arrays & Strings I',
    isReviewDay: false,
    topics: [{
      name: 'Introduction to Arrays & Strings',
      patterns: ['Sliding Window (Fixed/Variable)', 'Basic String Manipulation'],
      practice: ['Max Subarray Sum (Fixed Window)', 'Longest Substring Without Repeating Characters', 'String Reversal/Palindrome']
    }]
  },
  {
    day: 2,
    title: 'Arrays & Strings II',
    isReviewDay: false,
    topics: [{
      name: 'Advanced Array Patterns',
      patterns: ['Two Pointers (Opposite/Same Direction)', 'Prefix Sum'],
      practice: ['Container With Most Water', 'Subarray Sum Equals K', 'Product of Array Except Self']
    }]
  },
  {
    day: 3,
    title: 'Arrays & Strings III',
    isReviewDay: false,
    topics: [{
      name: 'Problem Consolidation',
      patterns: ['Combining Patterns', 'Edge Case Handling'],
      practice: ['3Sum', 'Longest Repeating Character Replacement', 'Deduplication from Sorted Array']
    }]
  },
  {
    day: 4,
    title: 'Hashing & Sets I',
    isReviewDay: false,
    topics: [{
      name: 'Hash Maps & Hash Sets',
      patterns: ['Frequency Counting', 'Existence Checks', 'Key-Value Pairing'],
      practice: ['Two Sum', 'Valid Anagram', 'Contains Duplicate']
    }]
  },
  {
    day: 5,
    title: 'Hashing & Sets II',
    isReviewDay: false,
    topics: [{
      name: 'Advanced Hashing',
      patterns: ['Grouping by Key', 'Understanding Collisions (Conceptual)', 'Using Complex Keys (e.g., Tuples)'],
      practice: ['Group Anagrams', 'Top K Frequent Elements', 'Insert Delete GetRandom O(1)']
    }]
  },
  {
    day: 6,
    title: 'Mock Interview & Review',
    isReviewDay: true,
    topics: [],
    notes: 'Focus on Arrays, Strings, and Hashing. Simulate a 60-90 minute mock interview. Review mistakes and redo challenging problems from the week.'
  },
  // Week 2
  {
    day: 7,
    title: 'Two Pointers & Greedy',
    isReviewDay: false,
    topics: [{
      name: 'Pointer & Greedy Patterns',
      patterns: ['In-place Two-Pointer (Sort Colors)', 'Fast/Slow Pointers (in arrays)', 'Greedy Proofs (Interval Scheduling)'],
      practice: ['Sort Colors', 'Merge Sorted Array', 'Non-overlapping Intervals']
    }]
  },
  {
    day: 8,
    title: 'Sorting Algorithms',
    isReviewDay: false,
    topics: [{
      name: 'Fundamental Sorting',
      patterns: ['Merge Sort', 'Quick Sort (Partitioning Logic)', 'Comparison vs. Non-Comparison'],
      practice: ['Implement Merge Sort', 'Kth Largest Element in an Array', 'Custom Sort Logic']
    }]
  },
  {
    day: 9,
    title: 'Sorting & Greedy II',
    isReviewDay: false,
    topics: [{
      name: 'Advanced Applications',
      patterns: ['Greedy with Sorting', 'Partitioning (Quickselect)'],
      practice: ['Merge Intervals', 'Meeting Rooms II', 'Task Scheduler']
    }]
  },
  {
    day: 10,
    title: 'Linked Lists I',
    isReviewDay: false,
    topics: [{
      name: 'Core Linked List Operations',
      patterns: ['Singly/Doubly Linked Lists', 'Dummy Head Node', 'Fast & Slow Pointers'],
      practice: ['Reverse a Linked List', 'Linked List Cycle Detection', 'Middle of the Linked List']
    }]
  },
  {
    day: 11,
    title: 'Linked Lists II',
    isReviewDay: false,
    topics: [{
      name: 'Advanced Pointer Manipulation',
      patterns: ['Two-Pointer Merging', 'Recursive Reversal'],
      practice: ['Merge Two Sorted Lists', 'Reorder List', 'Remove Nth Node From End of List']
    }]
  },
  {
    day: 12,
    title: 'Linked Lists III',
    isReviewDay: false,
    topics: [{
      name: 'Hard Linked List Problems',
      patterns: ['Complex Pointer Management', 'Constant Space Solutions'],
      practice: ['Reverse Nodes in k-Group', 'Copy List with Random Pointer', 'LRU Cache']
    }]
  },
  {
    day: 13,
    title: 'Mock Interview & Review',
    isReviewDay: true,
    topics: [],
    notes: 'Cover all topics from Days 1–12. Focus on Linked Lists, Sorting, and Greedy patterns. Identify weak spots and plan for focused practice.'
  },
  // Week 3
  {
    day: 14,
    title: 'Stacks & Queues',
    isReviewDay: false,
    topics: [{
      name: 'Stacks (LIFO) & Queues (FIFO)',
      patterns: ['Using Stacks for Reversal/Matching', 'Using Queues for Level-Order'],
      practice: ['Valid Parentheses', 'Implement Queue using Stacks', 'Daily Temperatures']
    }]
  },
  {
    day: 15,
    title: 'Monotonic Stack',
    isReviewDay: false,
    topics: [{
      name: 'Monotonic Stacks',
      patterns: ['Next/Previous Greater/Smaller Element'],
      practice: ['Next Greater Element I & II', 'Largest Rectangle in Histogram', 'Sliding Window Maximum']
    }]
  },
  {
    day: 16,
    title: 'Problem Consolidation',
    isReviewDay: false,
    topics: [{
      name: 'Stacks & Queues Applications',
      patterns: ['Combining Stacks with other DS', 'Choosing the right tool'],
      practice: ['Evaluate Reverse Polish Notation', 'Car Fleet', 'Simplify Path']
    }]
  },
  {
    day: 17,
    title: 'Trees - Binary & BST',
    isReviewDay: false,
    topics: [{
      name: 'Tree Traversals',
      patterns: ['DFS (Inorder, Preorder, Postorder)', 'BFS (Level Order)', 'Recursion vs. Iteration'],
      practice: ['Binary Tree Inorder Traversal', 'Maximum Depth of Binary Tree', 'Same Tree']
    }]
  },
  {
    day: 18,
    title: 'Trees - Construction & DP',
    isReviewDay: false,
    topics: [{
      name: 'BSTs and Advanced Concepts',
      patterns: ['Validate BST', 'Lowest Common Ancestor (LCA)', 'Tree Construction from Traversals'],
      practice: ['Validate Binary Search Tree', 'LCA of a BST', 'Construct Binary Tree from Preorder and Inorder Traversal']
    }]
  },
  { day: 19, title: 'Advanced Trees - Heaps', isReviewDay: false, topics: [{ name: 'Priority Queues / Heaps', patterns: ['Min/Max Heap', 'Top K Elements', 'Median Finding'], practice: ['Kth Largest Element in a Stream', 'Find Median from Data Stream', 'Merge K Sorted Lists'] }] },
  { day: 20, title: 'Advanced Trees - Tries', isReviewDay: false, topics: [{ name: 'Tries (Prefix Trees)', patterns: ['Insertion', 'Search', 'Prefix-based Search'], practice: ['Implement Trie (Prefix Tree)', 'Word Search II', 'Design Add and Search Words Data Structure'] }] },
  {
    day: 21,
    title: 'Mock Interview & Review',
    isReviewDay: true,
    topics: [],
    notes: 'Cover all linear structures (Stacks, Queues) and all Tree types (BT, BST, Heaps, Tries). Focus on traversals and common applications.'
  },
  // Week 4
  {
    day: 22,
    title: 'Graphs - Traversal',
    isReviewDay: false,
    topics: [{
      name: 'BFS & DFS',
      patterns: ['Graph Representations (Adjacency List/Matrix)', 'BFS for Shortest Path (unweighted)', 'DFS for Connectivity/Cycles'],
      practice: ['Number of Islands', 'Clone Graph', 'Course Schedule']
    }]
  },
  {
    day: 23,
    title: 'Graphs - Topological Sort',
    isReviewDay: false,
    topics: [{
      name: 'Topological Sort',
      patterns: ['Kahn\'s Algorithm (BFS)', 'DFS-based Algorithm'],
      practice: ['Course Schedule II', 'Alien Dictionary', 'Find All Possible Recipes from Given Supplies']
    }]
  },
  {
    day: 24,
    title: 'Graphs - Dijkstra & MST',
    isReviewDay: false,
    topics: [{
      name: 'Shortest Path & MST',
      patterns: ['Dijkstra\'s Algorithm (with Priority Queue)', 'MST concepts (Prim\'s/Kruskal\'s intuition)'],
      practice: ['Network Delay Time', 'Path with Minimum Effort', 'Min Cost to Connect All Points']
    }]
  },
  {
    day: 25,
    title: 'Graph Problem Consolidation',
    isReviewDay: false,
    topics: [{
      name: 'Advanced Graph Problems',
      patterns: ['Choosing the right algorithm', 'Implicit Graphs', 'Grid-based traversals'],
      practice: ['Rotting Oranges', 'Word Ladder', 'Pacific Atlantic Water Flow']
    }]
  },
  {
    day: 26,
    title: 'Bit Manipulation & Math',
    isReviewDay: false,
    topics: [{
      name: 'Bits & Math Tricks',
      patterns: ['XOR for finding unique/missing numbers', 'Bit Masks for subsets', 'Handling Integer Overflow', 'Combinatorics basics'],
      practice: ['Single Number', 'Number of 1 Bits', 'Counting Bits', 'Reverse Integer']
    }]
  },
  // Week 5
  {
    day: 27,
    title: 'Dynamic Programming I',
    isReviewDay: false,
    topics: [{
      name: '1D DP',
      patterns: ['Memoization vs. Tabulation', 'Identifying subproblems', 'DP state design'],
      practice: ['Climbing Stairs', 'House Robber', 'Coin Change']
    }]
  },
  {
    day: 28,
    title: 'Dynamic Programming II',
    isReviewDay: false,
    topics: [{
      name: '2D DP',
      patterns: ['Grid-based DP', 'Knapsack Pattern', 'Longest Common Subsequence (LCS)'],
      practice: ['Unique Paths', 'Longest Increasing Subsequence (LIS)', 'Combination Sum IV']
    }]
  },
  {
    day: 29,
    title: 'Systematic Review of Hard Topics',
    isReviewDay: true,
    topics: [],
    notes: 'Pick 6-8 unsolved or challenging problems from previous weeks. Focus on DP, Graphs, and Advanced Trees. Re-solve, optimize, and write clean C# implementations without looking at the solution first.'
  },
  {
    day: 30,
    title: 'Full Mock Interview',
    isReviewDay: true,
    topics: [],
    notes: 'Simulate a full 90–120 minute interview. Tackle one medium and one hard problem. Focus on clear communication, live coding, and testing. Afterward, analyze feedback and create a plan for any remaining weak spots.'
  }
];
