import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { getMovies } from "../../features/movies/movieSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/storeHook";
import Header from "../Header/Header";
import MovieCard from "../MovieCard/MovieCard";
import SearchBox from "../SearchBox/SearchBox";

import "./Home.css";

function Home() {
  const { darkTheme, movies } = useAppSelector((state) => state);
  // console.log(movies.data?.results);

  const [searchTerm, setSearchTerm] = useState("");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const searchMovies = movies.data?.results.filter((movie) => {
    return movie.title.toLowerCase().includes(searchTerm);
  });

  return (
    <div className={darkTheme.theme ? "dark" : ""}>
      <div className="dark:bg-red-900 dark:text-white min-h-screen px-4 lg:px-12 pb-20">
        <div className="mb-12 flex items-center justify-between">
          <SearchBox setSearchTerm={setSearchTerm} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {searchMovies && searchMovies.length ? (
            searchMovies.map((movie) => {
              const { id, title, overview, poster_path } = movie;
              return <MovieCard key={id} id={id} title={title} overview={overview} poster_path={poster_path} />;
            })
          ) : (
            <h4>No Movie Found</h4>
          )}
        </div>
      </div>
      <Outlet />
    </div>
  );
}

export default Home;
