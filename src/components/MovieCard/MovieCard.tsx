import { FC } from "react";
import { Link } from "react-router-dom";
interface MovieCardProps {
  poster_path: string;
  overview?: string;
  title: string;
  id: number;
}

const MovieCard: FC<MovieCardProps> = (props) => {
  const { poster_path, overview, title, id } = props;
  return (
    <Link
      to={`${id}`}
      onClick={() => {
        // console.log(id);
      }}
    >
      <div
        className="max-w-sm bg-white mx-auto rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 hover:-translate-y-4 
    duration-200 hover:animate-pulse cursor-pointer
    "
      >
        <img
          src={`https://image.tmdb.org/t/p/original${poster_path}`}
          alt={title}
          className="rounded-t-lg h-80 w-full object-cover"
        />

        <div className="p-5">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
          {overview && (
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{overview?.slice(0, 300)}...</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MovieCard;
