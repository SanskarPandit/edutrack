import { configureStore } from "@reduxjs/toolkit";
import coursesReducer from "./slices/CourseSlice";
import userReducer from "./slices/UserSlice";

const store = configureStore({
  reducer: {
    courses: coursesReducer,
    user: userReducer,
  },
});

export default store;
