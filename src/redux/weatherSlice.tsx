import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { weatherState } from "./types/weatherState";

const initialState: weatherState = {
  data: [],
  status: "idle",
  error: null,
};

export const getData = createAsyncThunk<any, string, { rejectValue: string }>(
  "weather/getData",
  async (city: string) => {
    const API_KEY = import.meta.env.VITE_SECRET;
    const cnt = 5;
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=${cnt}&appid=${API_KEY}`
    );

    return result.data;
  }
);

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    // empty
  },
  extraReducers: (builder) => {
    builder
      .addCase(getData.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(getData.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const {} = weatherSlice.actions;

export default weatherSlice.reducer;
