// Generic function to sort the task array
//
// The .sort() method receives a function that compares two items (a, b) and should return:
// - A NEGATIVE number (-1) if "a" should come before "b".
// - A POSITIVE number (1) if "a" should come after "b".
// - ZERO (0) if their order shouldn't change.
//
// This function handles:
// 1. If the value is null, send it to the end of the list.
// 2. If it's a number, sort numerically (asc or desc).
// 3. If it's a string, sort alphabetically (asc or desc).
//
// The spread [...tasks] creates a copy of the original array to avoid mutating it directly.

import type { TaskModel } from '../models/TaskModel';

// Defines the expected parameters for the function
export type SortTasksOptions = {
  tasks: TaskModel[]; // List of tasks to be sorted
  direction?: 'asc' | 'desc'; // Sort direction: ascending or descending (optional)
  field?: keyof TaskModel; // Which task field to use for sorting (optional)
};

export function sortTasks({
  field = 'startDate', // If the field isn't provided, we use 'startDate' by default
  direction = 'desc', // If the direction isn't provided, we use 'desc' (descending)
  tasks = [], // If no task list is passed, we use an empty array
}: SortTasksOptions): TaskModel[] {
  return [...tasks].sort((a, b) => {
    // Get the value of the chosen property (e.g., startDate) from each task
    const aValue = a[field];
    const bValue = b[field];

    // --- HANDLING NULL VALUES ---

    // If both are null, keep the current order
    if (aValue === null && bValue === null) return 0;

    // If only the first is null, send it to the end
    if (aValue === null) return 1;

    // If only the second is null, send it to the end
    if (bValue === null) return -1;

    // --- NUMERIC COMPARISON ---

    // If both values are numbers, subtract to determine order
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return direction === 'asc'
        ? aValue - bValue // E.g., 1, 2, 3...
        : bValue - aValue; // E.g., 3, 2, 1...
    }

    // --- STRING COMPARISON ---

    // If both values are strings, use localeCompare to sort alphabetically
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return direction === 'asc'
        ? aValue.localeCompare(bValue) // A -> Z
        : bValue.localeCompare(aValue); // Z -> A
    }

    // --- UNHANDLED CASES ---

    // If not number, string, or null, don't change the order
    return 0;
  });
}
