// Advent of Code 2022 Day 1
import fs from 'fs';
import { max, removeFrom, sum } from './common.js';

const DAY = '01';

/**
 * Break string inputs separated by blank lines into arrays of numbers
 * @param {Array.<string>} input the text to break up
 * @returns {Array.<Array.<number>>}
 */
function breakUpInput(input) {
  const groups = [];
  let group = [];
  for (let i = 0; i < input.length; i += 1) {
    const line = input[i];
    if (line.length > 0) {
      group.push(parseInt(line, 10));
    } else {
      groups.push(group);
      group = [];
    }
  }
  // add final group if no newline at end of file
  if (group.length > 0) {
    groups.push(group);
  }
  return groups;
}

/**
 * Return a solution for the Part 1 problem statement
 * @param {Array.<string>} input the problem input
 * @returns {number}
 */
function solvePart1(input) {
  const groups = breakUpInput(input);
  let largest = 0;
  for (let i = 0; i < groups.length; i += 1) {
    const groupsum = sum(groups[i]);
    if (groupsum > largest) {
      largest = groupsum;
    }
  }
  return largest;
}

/**
 * Return a solution for the Part 2 problem statement
 * @param {Array.<string>} input the problem input
 * @returns {number}
 */
function solvePart2(input) {
  const groups = breakUpInput(input);
  const sums = groups.map(sum);
  const biggestThree = [];
  for (let i = 0; i < 3; i += 1) {
    const currentMax = max(sums);
    biggestThree.push(currentMax);
    removeFrom(sums, currentMax);
  }
  return sum(biggestThree);
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
