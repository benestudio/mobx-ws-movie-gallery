import React, { useCallback } from "react";
import MovieCardView from "./MovieCardView";
import { IMovie } from "../../models/Movie";

export interface IProps {
  movie: IMovie;
}

const MovieCard = ({ movie }: IProps) => {
  const posterPath = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=";
  const isInWatchlist = false;
  const handleWatchlistClick = useCallback((e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => {}, []);
  return <MovieCardView movie={movie} posterPath={posterPath} isInWatchlist={isInWatchlist} onWatchlistClick={handleWatchlistClick} />;
};

export default MovieCard;
