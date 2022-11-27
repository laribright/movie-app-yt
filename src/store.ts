import { configureStore } from "@reduxjs/toolkit";

import movieReducer from "./features/movies/movieSlice";
import themeReducer from "./features/theme/themeSlice";

export const store = configureStore({
  reducer: {
    darkTheme: themeReducer,
    movies: movieReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
