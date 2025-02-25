export default {
  problemInfo: [
    {
      Number: "1",
      Difficulty: "Easy",
      Name: "Longest Substring",
      Problem:
        "Given a string s, find the length of the longest substring without repeating characters.",
      "Example 1":
        'Input: s = "abcabcbb " \n Output: 3 \n Explanation: The answer is "abc", with the length of 3.',
      "Example 2":
        'Input: s = "bbbbb" \n Output: 1 \n Explanation: The answer is "b", with the length of 1.',
      "Example 3":
        'Input: s = "pwwkew" \n Output: 3 \n Explanation: The answer is "wke", with the length of 3. Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.',
      "Test Case 1": {
        Input: "abcabcbb",
        Output: "3",
      },

      "Test Case 2": {
        Input: "bbbbb",
        Output: "1",
      },

      "Test Case 3": {
        Input: "pwwkew",
        Output: "3",
      },

      "Test Case 4": {
        Input: "accovottw",
        Output: "5",
      },

      "Test Case 5": {
        Input: "yywercrllweo",
        Output: "6",
      },
    },

    {
      Number: "2",
      Difficulty: "Easy",
      Name: "Missing Number",
      Problem:
        "Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.",
      "Example 1":
        "Input: nums = [3,0,1] \n Output: 2 \n Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.",
      "Example 2":
        "Input: nums = [0,1] \n Output: 2 \n Explanation: n = 2 since there are 2 numbers, so all numbers are in the range [0,2]. 2 is the missing number in the range since it does not appear in nums.",
      "Example 3":
        "Input: nums = [9,6,4,2,3,5,7,0,1] \n Output: 8 \n Explanation: n = 9 since there are 9 numbers, so all numbers are in the range [0,9]. 8 is the missing number in the range since it does not appear in nums.",
      "Test Case 1": {
        Input: "[3,0,1]",
        Output: "2",
      },

      "Test Case 2": {
        Input: "[0,1]",
        Output: "2",
      },

      "Test Case 3": {
        Input: "[9,6,4,2,3,5,7,0,1]",
        Output: "8",
      },

      "Test Case 4": {
        Input: "[1,4,5,6,2,3]",
        Output: "0",
      },

      "Test Case 5": {
        Input: "[0,3,7,5,1,4,2]",
        Output: "6",
      },
    },

    {
      Number: "3",
      Difficulty: "Medium",
      Name: "Most Frequent Strings",
      Problem:
        "Given an array of strings words and an integer k, return the k most frequent strings. \n Return the answer sorted by the frequency from highest to lowest. Sort the words with the same frequency by their lexicographical order.",
      "Example 1":
        'Input: words = ["i","love","leetcode","i","love","coding"], k = 2 \n Output: ["i","love"]',
      "Example 2":
        'Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4 \n Output: ["the","is","sunny","day"]',
      "Test Case 1": {
        Input: '["i","love","leetcode","i","love","coding"], k = 2',
        Output: '["i","love"]',
      },

      "Test Case 2": {
        Input:
          '["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4',
        Output: '["the","is","sunny","day"]',
      },

      "Test Case 3": {
        Input: '["i", "like", "pizza", "i", "pizza"], k = 2',
        Output: '["i", "pizza"]',
      },

      "Test Case 4": {
        Input: '["one","bright","sunny","sunny","day","one"], k = 2',
        Output: '["one","sunny"]',
      },

      "Test Case 5": {
        Input: '["under","the","weather","under","the","weather"], k = 3',
        Output: '["under","the", "weather"]',
      },
    },

    {
      Number: "4",
      Difficulty: "Medium",
      Name: "Subsets",
      Problem:
        "Given an integer array nums of unique elements, return all possible subsets (the power set). \n The solution set must not contain duplicate subsets. Return the solution in any order.",
      "Example 1":
        "Input: nums = [1,2,3] \n Output: [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      "Example 2": "Input: nums = [0] \n Output: [[],[0]]",
      "Test Case 1": {
        Input: "[1,2,3]",
        Output: "[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]",
      },

      "Test Case 2": {
        Input: "[0]",
        Output: "[[],[0]]",
      },

      "Test Case 3": {
        Input: "[2,3]",
        Output: "[], [2], [3], [2,3]",
      },
    },

    {
      Number: "5",
      Difficulty: "Hard",
      Name: "Regular Expression",
      Problem:
        "Given an input string s and a pattern p, implement regular expression matching with support for '.' and '*' where: \n \n '.' Matches any single character.​​​​ \n '*' Matches zero or more of the preceding element. \nThe matching should cover the entire input string (not partial).",
      "Example 1": 'Input: s = "aa", p = "a" \n Output: false',
      "Example 2": 'Input: s = "aa", p = "a*" \n Output: true',
      "Example 3": 'Input: s = "ab", p = ".*" \n Output: true',
      "Test Case 1": {
        Input: 's = "aa", p = "a"',
        Output: "false",
      },

      "Test Case 2": {
        Input: 's = "aa", p = "a*"',
        Output: "true",
      },

      "Test Case 3": {
        Input: 's = "ab", p = ".*"',
        Output: "true",
      },
    },

    {
      Number: "6",
      Difficulty: "Hard",
      Name: "Parentheses Substring",
      Problem:
        "Given a string containing just the characters '(' and ')', find the length of the longest valid (well-formed) parentheses substring.",
      "Example 1": 'Input: s = "(()" \n Output: 2',
      "Example 2": 'Input: s = ")()())" \n Output: 4',
      "Test Case 1": {
        Input: 's = "(()"',
        Output: "2",
      },

      "Test Case 2": {
        Input: 's = ")()())"',
        Output: "4",
      },

      "Test Case 3": {
        Input: 's = ")()()())"',
        Output: "6",
      },
    },
  ],
};
