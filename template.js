// Template for Advent of Code solutions
import fs from 'fs';

const DAY = '01';

/**
 * Return a solution for the Part 1 problem statement
 * @param {Array.<string>} input the problem input
 * @returns {number}
 */
function solvePart1(input) {
}

/**
 * Return a solution for the Part 2 problem statement
 * @param {Array.<string>} input the problem input
 * @returns {number}
 */
function solvePart2(input) {
}

/**
 * Run the solutions for Part 1 and Part 2 with test cases and problem input
 */
(function solveDay() {
  const TestInput = fs.readFileSync(`day${DAY}test.txt`, 'utf8').split('\n');
  const DataInput = fs.readFileSync(`day${DAY}data.txt`, 'utf8').split('\n');
  console.log(`Day ${DAY} test case, part 1: ${solvePart1(TestInput)}`);
  console.log(`Day ${DAY} solution,  part 1: ${solvePart1(DataInput)}`);
  console.log(`Day ${DAY} test case, part 2: ${solvePart2(TestInput)}`);
  console.log(`Day ${DAY} solution,  part 2: ${solvePart2(DataInput)}`);
}());
