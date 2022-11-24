import { createSlice } from "@reduxjs/toolkit";

type ThemeState = {
  theme: boolean;
  loading: boolean;
};

const themeFromLocalStorage = !!localStorage.getItem("movies-theme");

const initialState: ThemeState = {
  theme: themeFromLocalStorage,
  loading: false,
};

export const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      localStorage.setItem("movies-theme", String(!state.theme));
      // return loading equal to true
      return { ...state, theme: !state.theme, loading: true };
    },
  },
});

export const { toggleTheme } = themeSlice.actions;

export default themeSlice.reducer;
