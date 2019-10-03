import React from 'react';

import { IMovie } from '../../../models/Movie';
import { Nullable, formatDate } from '../../../util';
import { IGenre } from '../../../models/Genre';

import './style.css';

export interface IProps {
  movie: IMovie;
  backgroundImageUrl: Nullable<string>;
  genre: Nullable<IGenre>
}

const MovieDetailsView = ({ movie, backgroundImageUrl, genre }: IProps) => (
  <div
    className="MovieDetails"
    style={{ backgroundImage: backgroundImageUrl ? `url(${backgroundImageUrl})` : undefined }}
  >
      <div className="overlay">
        <div className="details-container">
          {movie ? (
            <>
              <h1 className="title">{movie.title}</h1>
              <div className="meta">
                <span>{formatDate(new Date(movie.release_date))}</span>
                {genre && <span className="secondary">{genre.name}</span>}
                {movie.runtime !== null ? <span className="secondary">{movie.runtime} min.</span> : null}
              </div>
              <p>
                {movie.overview}
              </p>
            </>
          ) : null}
        </div>
      </div>
    </div>
)

export default MovieDetailsView;