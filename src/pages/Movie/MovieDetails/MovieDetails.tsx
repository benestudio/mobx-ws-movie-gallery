import React from 'react';
import { IMovie } from '../../../models/Movie';
import MovieDetailsView from './MovieDetailsView';

export interface IProps {
  movie: IMovie;
}

const MovieDetails = ({ movie }: IProps) => {
  const backgroundImageUrl = null;
  const genre = Array.isArray(movie.genres) && movie.genres.length ? movie.genres[0] : null;
  return (
    <MovieDetailsView movie={movie} backgroundImageUrl={backgroundImageUrl} genre={genre} />
  );
}

export default MovieDetails;
