/*  istanbul ignore file  */

import { createSlice } from "@reduxjs/toolkit";
import { getQuiz } from "./api";

const initialState = {
  quiz: {},
  loading: true,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getQuiz.fulfilled, (state, action) => {
      state.quiz = action.payload;
      state.loading = false;
    });
  },
});

export default quizSlice.reducer;
