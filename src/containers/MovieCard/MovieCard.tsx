import React, { useCallback } from "react";
import MovieCardView from "./MovieCardView";
import { IMovie } from "../../models/Movie";
import { observer } from "mobx-react";
import { useStore } from "../../store";

export interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  const store = useStore();
  const posterPath = (movie.poster_path && store.app.getImageUrl(movie.poster_path))
    || "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
  const isInWatchlist = store.myMovies.contains(movie);
  const handleWatchlistClick = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {
    e.preventDefault();
    if (store.myMovies.contains(movie)) {
      store.myMovies.removeMovie(movie);
    } else {
      store.myMovies.addMovie(movie);
    }
  }, [movie, store.myMovies]);
  return <MovieCardView movie={movie} posterPath={posterPath} isInWatchlist={isInWatchlist} onWatchlistClick={handleWatchlistClick} />;
};

export default observer(MovieCard);
