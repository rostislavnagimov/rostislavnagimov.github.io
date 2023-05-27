import { createSlice } from "@reduxjs/toolkit"
import { AppState } from "./store"
import { HYDRATE } from "next-redux-wrapper"

const initialState = {
  info: {
    isLoading: true
  },
  content: {
    experience: {},
    resume: {},
    projects: {}
  }
}

export const slice = createSlice({
  name: "data",
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
export const selectResume = (state: AppState) => state.data.content.resume;
export const selectProjects = (state: AppState) => state.data.content.projects;
export const selectExperience = (state: AppState) => state.data.content.experience;
export const selectLoading = (state: AppState) => state.data.info.isLoading;

export default slice.reducer;
