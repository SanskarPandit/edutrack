// src/slices/coursesSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { courses } from "../data";

const coursesSlice = createSlice({
  name: "courses",
  initialState: courses,
  reducers: {
    markCourseAsCompleted: (state, action) => {
      const course = state.find((course) => course.id === action.payload);
      if (course) {
        course.progress = 100;
        course.status = "Completed";
      }
    },
  },
});

export const { markCourseAsCompleted } = coursesSlice.actions;
export default coursesSlice.reducer;
