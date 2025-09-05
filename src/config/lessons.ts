import type { Lesson } from "../models/lesson";
/**
 * Gets all available lessons.
 *
 */
export function getAllLessons(): Lesson[] {
  // TODO: Load lessons from files.
  return [
    {
      id: "lesson-01",
      name: "Home Row",
      title: "Home Row",
      description: "Learn the base finger positions on the keyboard.",
    },
    {
      id: "lesson-02",
      name: "Top Row",
      title: "Top Row",
      description: "Expand your reach to the top row keys like Q, W, and E.",
    },
    {
      id: "lesson-03",
      name: "Bottom Row",
      title: "Bottom Row",
      description: "Expand your reach to the bottom row keys like Y, X, and C.",
    },
  ];
}
