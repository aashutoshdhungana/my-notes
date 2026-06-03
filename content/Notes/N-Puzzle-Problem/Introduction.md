---
title: Introduction
order: 1
---

I recently had to take an exam for an Artificial Intelligence class that required studying search agents. Since I had already covered this topic during my Bachelor's degree, I was struggling to find the motivation to study. To make things interesting, I decided to implement those search algorithms to solve the N-puzzle problem.

What began as a standard algorithmic exercise ultimately evolved into a profound learning experience. In this series of articles, I document my journey of implementing the N-Puzzle problem, sharing the core insights, optimization strategies, and technical lessons gained from the process.

I have structured the content so that you can thoroughly understand the N-puzzle and its constraints before diving into the search algorithms used to find solutions. First, I explain the vastness of the problem and what the search space looks like. Then, we will look at how to encode the problem in Python. Finally, we will dive into implementing some popular search algorithms to solve this problem efficiently. Before reading further, I highly recommend trying to solve the puzzle yourself!

---

## N-puzzle problems

A N-puzzle has 1 to n digits arranged in a 2D-grid, along with a single empty space. Initially, the numbers are scrambled, and the goal is to arrange them in numerical order with the empty space at the very end. To solve it, you slide the tiles adjacent to the blank space into the empty slot, shifting the space around until the puzzle is solved. You can try to solve an 8-puzzle [here](https://8puzzle.org/).

---

<div style="display: flex; gap: 40px; justify-content: center; align-items: flex-start; margin: 20px 0;">

  <!-- Left Table Container -->
  <div style="text-align: center;">
    <table>
      <tbody>
        <tr><td>7</td><td>2</td><td>4</td></tr>
        <tr><td>5</td><td>_</td><td>6</td></tr>
        <tr><td>8</td><td>3</td><td>1</td></tr>
      </tbody>
    </table>
    <div style="font-style: italic; margin-top: 8px;">Unsolved Puzzle</div>
  </div>

  <!-- Right Table Container -->
  <div style="text-align: center;">
    <table>
      <tbody>
        <tr><td>1</td><td>2</td><td>3</td></tr>
        <tr><td>4</td><td>5</td><td>6</td></tr>
        <tr><td>7</td><td>8</td><td>_</td></tr>
      </tbody>
    </table>
    <div style="font-style: italic; margin-top: 8px;">Solved Puzzle</div>
  </div>

</div>

---

<div style="margin-top: 40px; display: flex; justify-content: space-between;">
  <span></span>
  <a href="./Solvability" style="background-color: var(--secondary); color: var(--lightgray); padding: 10px 10px; border-radius: 6px; text-decoration: none; font-weight: bold;">Next: Solvability of N-Puzzle</a>
</div>
