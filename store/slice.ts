import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
  experience: {},
  resume: {},
  projects: {}
}

export const slice = createSlice({
  name: "state",
  initialState,
  reducers: {
    setState(state, action) {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
  },
})

export const { setState } = slice.actions;

export const selectState = (state: AppState) => state;
export const selectResume = (state: AppState) => state.state.resume;
export const selectProjects = (state: AppState) => state.state.projects;
export const selectExperience = (state: AppState) => state.state.experience;

export default slice.reducer;
