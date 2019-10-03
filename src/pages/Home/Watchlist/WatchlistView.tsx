import React from 'react';

import Heading from '../../../components/Heading';
import MovieCard from '../../../containers/MovieCard';
import { IMovie } from '../../../models/Movie';

import './style.css';

export interface IProps {
  myMovies: IMovie[];
  isEmpty: boolean;
}

const WatchlistView = ({ myMovies, isEmpty }: IProps) => (
  <div className="Watchlist">
    <Heading>Watchlist</Heading>
    <div className="results">
      {isEmpty
        ? "You don't have any movies added to your watchlist."
        : myMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
    </div>
  </div>
);

export default WatchlistView;
