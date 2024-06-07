import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    enrolledCourses: [1, 2], // Mocked enrolled course IDs
  },
  reducers: {
    enrollInCourse: (state, action) => {
      state.enrolledCourses.push(action.payload);
    },
  },
});

export const { enrollInCourse } = userSlice.actions;
export default userSlice.reducer;
