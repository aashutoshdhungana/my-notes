---
title: Encoding N-Puzzle Problem for Search
order: 3
draft: true
---

## Searching for solution

Given a starting position, a search problem involves finding the sequence of steps to take to move from the starting position to goal state. To solve a problem using search, we have to ecode the problem in a way where we can represent the following items for a problems:

### States

States represent any valid configuration of a problem

### Initial state

Initial state is the state which we start to search for a solution from

### Actions

Action are any allowed operation on the state

### Transition function

Transition function determines how taking an action on a state changes the states to another state

### Goal Test

Given a state a function to identify if it is the goal state or not

### Path cost

Given a state and an action how much effort is required

<div style="margin-top: 40px; display: flex; justify-content: space-between;">
  <a href="./Solvability" style="background-color: var(--secondary); color: var(--lightgray); padding: 10px 10px; border-radius: 6px; text-decoration: none; font-weight: bold;">Previous: Solvability of N-Puzzle Problem</a>
    <span></span>
</div>
