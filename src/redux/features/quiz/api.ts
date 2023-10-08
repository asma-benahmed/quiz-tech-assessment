/*  istanbul ignore file  */

import { createAsyncThunk } from "@reduxjs/toolkit";
import service from "../../../service";

export const getQuiz = createAsyncThunk(
  "quiz/getQuiz",
  async (params, thunkAPI) => {
    try {
      const param = { themeId: "63a88cf1e774d167cd92c06f" };
      const response = await service.get(`user/quiz/random`, { params: param });
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const submitQuiz = createAsyncThunk(
  "quiz/submitQuiz",
  async (params: any, thunkAPI) => {
    try {
      const { responseData, quizId } = params;
      const response = await service.post(
        `/user/quiz/${quizId}/submit`,
        responseData
      );
      return thunkAPI.fulfillWithValue(response.data);
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
