Practicing DSA

4.3: Lists of Depths
  - Given a binary tree, design an algorithm which creates a linked list of all the nodes at each depth (if you have a tree with depth D, you'll have D linked lists)

10.2 Group Anagrams
  - Write a method to sort an array of strings so that all the anagrams are next to each other.

Tries
  - Given a list of string str[] and a prefix string pre. The task is to count the number of words in list of string with given prefix using trie. STRETCH GOAL: Return the words that use the prefix.
  - Example:
    - Input: str = [ “apk”, “app”, “apple”, “arp”, “array” ], pre = “ap”
    - Output: 3
    - Input: str = [ “gee”, “geek”, “geezer”, “geeksforgeeks”, “geekiness”, “geekgod” ], pre = “geek”
    - Output: 4

4.1: Route Between Nodes
  - Given a directed graph, design an algorithm to find out whether there is a route between two nodes

8.1: Triple Step
  - A child is running up a staircase with n steps and can hop either 1 step, 2 steps, or 3 steps at a time. Implement a method to count how many possible ways the child can run up the stairs.
  - Example:
    - for n = 2, there are 2 unique ways to run up the stairs: [1, 1] or [2]
    - for n = 3, there are 4 unique ways:  [1, 1, 1], [1, 2], [2, 1], or [3]
    - for n = 4, there are 7 unique ways: [1, 1, 1, 1], [1, 1, 2], [1, 2, 1], [2, 1, 1], [2, 2], [1, 3], [3, 1]

1.4 and 1.5: String Permutations
  - 1.4 Palindrome Permutation
    - Given a string, write a function to check if it is a permutation of a palindrome.  The palindrome does not need to be limited to just dictionary words.

    - Input: Tact coa
    - Output: True
    - Input: Cat
    - Output: False

  - 1.5 One Away
    - There are three types of edits that can be performed on strings: insert a character, remomve a character, or replace a character. Given two strings, write a function to check if they are one edit (or zero edits) away.

    - pale, ple -> true
    - pales, pale -> true
    - pale, bale -> true
    - pale, bake ->  false

2.3 and 3.5 Delete Middle Node and Sort Stack
  - 2.3 Delete the middle node
    - Implement an algorithm to delete a node in the middle of a singly linked list, given only access to that node.

  - 3.5 Sort Stack
    - Write a program to sort a stack such that the smallest items are on the top. You can use an additional temporary stack, but you may not copy the elements into any other data structure (such as an array). The stack supports the following operations: push, pop, peek, and isEmpty.