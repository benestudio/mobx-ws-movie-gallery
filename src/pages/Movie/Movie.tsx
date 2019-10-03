import React, { useEffect } from 'react';
import { RouteComponentProps } from 'react-router';

import MovieView from './MovieView';

interface IRouteParams {
  id: string;
}

const Movie = ({ match }: RouteComponentProps<IRouteParams>) => {
  useEffect(() => {}, [match.params.id]);
  return (
    <MovieView movie={null} isLoading={false} />
  );
}

export default Movie;
