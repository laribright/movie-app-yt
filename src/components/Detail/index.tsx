import { useEffect, useLayoutEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getMovieDetails, getSelectedMovie } from "../../features/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import MovieCard from "../MovieCard/MovieCard";

const Detail = () => {
  const { movieId } = useParams();
  const dataMovie = useSelector(getSelectedMovie);
  const dispatch = useAppDispatch();
  useLayoutEffect(() => {
    dispatch(getMovieDetails(movieId));
  }, [dispatch, movieId]);

  // if not found movieDetails
  if (!dataMovie) {
    return <h1>Movie Not Found</h1>;
  }

  return <MovieCard {...dataMovie} />;
};

export default Detail;
