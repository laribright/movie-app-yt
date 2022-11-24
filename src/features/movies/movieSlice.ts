import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Action
export const getMovies = createAsyncThunk("movies/getMovies", async (data, thunkApi) => {
  try {
    const response = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a8a6fa2f944128e9712135bc3ca000b1"
    );
    return await response.json();
  } catch (error: any) {
    return thunkApi.rejectWithValue(error.message);
  }
});

interface MovieState {
  loading: boolean;
  error: null | string;
  data: null | { results: any[] };
}

const initialState: MovieState = {
  loading: false,
  error: null,
  data: null,
};

// Slice
const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(getMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(getMovies.fulfilled, (state, action: PayloadAction<{ results: any[] }>) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(getMovies.rejected, (state, action: PayloadAction<any>) => {
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default movieSlice.reducer;
