import React from "react";
import { Link } from "react-router-dom";

import { IMovie } from "../../models/Movie";

import './style.css';

export interface IProps {
  movie: IMovie;
  posterPath: string;
  isInWatchlist: boolean;
  onWatchlistClick: (e: React.MouseEvent<HTMLSpanElement, MouseEvent>) => void;
}

const MovieCardView = ({ movie, posterPath, isInWatchlist, onWatchlistClick }: IProps) => (
  <Link className="MovieCard" to={`/movie/${movie.id}`}>
    <div className="buttons"><span onClick={onWatchlistClick}>{isInWatchlist ? "Remove from watchlist" : "Add to watchlist"}</span></div>
    <img alt={movie.title} src={posterPath} />
    <div className="title">{movie.title}</div>
  </Link>
);

export default MovieCardView;
