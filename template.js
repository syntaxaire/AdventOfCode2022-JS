// Template for Advent of Code solutions
import fs from 'fs';

const DAY = '01';

/**
 * Return a solution for the Part 1 problem statement
 * @param {string} input the input text file
 */
function SolvePart1() {
  return true;
}

/**
 * Return a solution for the Part 2 problem statement
 * @param {string} input the input text file
 */
function SolvePart2() {
  return true;
}

function SolveDay() {
  const TestInput = fs.readFileSync(`day${DAY}test.txt`, 'utf8');
  const DataInput = fs.readFileSync(`day${DAY}data.txt`, 'utf8');
  console.log(`Day ${DAY} test case, part 1: ${SolvePart1(TestInput)}`);
  console.log(`Day ${DAY} solution,  part 1: ${SolvePart1(DataInput)}`);
  console.log(`Day ${DAY} test case, part 2: ${SolvePart2(TestInput)}`);
  console.log(`Day ${DAY} solution,  part 2: ${SolvePart2(DataInput)}`);
}

SolveDay();
