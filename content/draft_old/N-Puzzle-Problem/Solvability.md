---
title: Solvability of N-Puzzle Problem
order: 2
draft: true
---

In a N-puzzle problem with N+1 tiles, there are **(N+1)!** different ways the numbers can be arranged initially. Out of all initial states, not every configuration is solvable. The solvability of a N-Puzzle problem depends on the size of the grid i.e $ \sqrt{N+1} $ and the number of inversions in the grid.

---

## What is inversion?

The number of times a larger number preceeds another smaller number in an array is known as inversion.

For example, in the array: **[8, 3, 7, 4]**

Inversions for 8 = 3

Inversions for 3 = 0

Inversions for 7 = 1

Inversions for 4 = 0

Total inversions in the array is 4.

To calculate inversions in the unsolved 8-puzzle problem above, we need to first flatten the 2D-grid into a 1D array. The empty slot goes last in the solved puzzle, so we can consider the empty position as a 9

We get the array: **[7, 2, 4, 5, 6, 8, 3, 1]**, where we can find the number of inversions is **16**

---

## How inversions relate to solvability?

The rule for solvability depends on weather the grid size (width of the puzzle) is odd or even

### Case 1: Odd Grids (3x3, 5x5,...)

In an N-puzzle, we can either move a tile horizontally or vertically. For odd grids, moving a tile horizontally doesnot change the inversion at all and moving a tile vertically always changes the no of inversions by an even numbe; for an 3x3 grid, moving a tile vertically shifts the tile by 2 positions which in turn changes the number of inversions by some even number.

A fully solved puzzle has 0 inversions, which is an even number. Thus, in an odd puzzle, if the initial number of inversions is odd, we can only transition to other odd inversion sates; we can never reach the goal.

> [!TIP] Rule for Odd Grids
> Only initial states with even number of inversions is solvable

### Case 2: Even Grids (4x4, 6x6,...)

For even grids, the behaviour is same for moving horizontally. But when moving a tile vertically, the tile move past odd number of tiles which causes the parity (odd or even nature) of invertions to change.

To setup rules for even grid, let's number the rows from the bottom of the grid i.e. Bottom Row as Row 1, next one from bottom as 2 and so on.

If the empty tile is in bottom row or any other odd row, we need to make even number of vertical moves to solve the puzzle, thus when initial state has empty tile in a odd row, the number of initial inversions need to be even then and only then can we move the empty tile to the bottom row (where it needs to be) by using even number of transitions.

If the empty tile is in any even row, we need to make odd number of vertical moves i.e. only if we start with odd number of inversion we can move the empty tile to the bottom and have even number of inversions (which is required for the puzzle to be solvable).

We can see that puzzle is solvable for the following cases:

- If inversion is odd and empty tile is in even row
- If inversion is even and empty tile is in odd row

> [!TIP] Rule for Even Grids
> **no_of_inversions + row_of_empty_tile** should be **odd** for the puzzle to be solvable

### Note about solvability

In the N-puzzle problem, no matter how many transitions you make, an unsolvable grid can never become solvable, and vice versa. If we were to create a transition graph starting from a solvable state, we could eventually reach every other solvable state. The same logic applies to unsolvable states; any transitions from an unsolvable state will only lead to other unsolvable states. This creates two entirely distinct graphs: one for solvable states and one for unsolvable states.

---

## Searching for Solution

As we discussed we have (N+1)! different possible configuration for N-Puzzle problem. We also know that all these configurations are divided evenly into two transitions graphs one for solvable and other for unsolvable states. So, when we start with a solvable initial state, we have $ \frac{(N+1)!}{2} $ possible states to search for the solution. This search space, grows really fast with increase in grid size and it become computationally intractable to find the solution for bigger puzzles.

Even for a small grid of 15-puzzle (4X4):

- Total Tiles (N+1) = 16 tiles
- Total possible configurations: $ 16! = 20,922,789,899,000 $
- Total number of solvable configurations (search space):

  $$
        \frac{(N+1)!}{2} = \frac{16!}{2} = 10,461,394,944,000
  $$

That is over 10 trillion rechable states for a simple $ 4 \times 4 $ grid.

Searching thorough such a big amount of states is not feasible with a brute force approach. We need to explore efficient search strategies so that we can find solution in a reasonable amoung of time.

---

<div style="margin-top: 40px; display: flex; justify-content: space-between;">
  <a href="./Introduction" style="background-color: var(--secondary); color: var(--lightgray); padding: 10px 10px; border-radius: 6px; text-decoration: none; font-weight: bold;">Previous: Introduction</a>
   <a href="./Encode" style="background-color: var(--secondary); color: var(--lightgray); padding: 10px 10px; border-radius: 6px; text-decoration: none; font-weight: bold;">Next: Encoding N-Puzzle Problem for search</a>
</div>
