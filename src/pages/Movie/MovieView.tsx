import React  from 'react';
import { IMovie } from '../../models/Movie';
import { Nullable } from '../../util';

import MovieDetails from './MovieDetails';

export interface IProps {
  movie: Nullable<IMovie>;
  isLoading: boolean;
}

const MovieView = ({ movie, isLoading }: IProps) => isLoading ? (
  <span>loading...</span>
) : movie === null ? (
  <span>error</span>
) : (
  <MovieDetails movie={movie!} />
);

export default MovieView;
