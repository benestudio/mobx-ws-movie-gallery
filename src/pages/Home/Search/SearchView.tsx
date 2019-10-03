import React from "react";
import SearchInput from "./SearchInput";
import MovieCard from "../../../containers/MovieCard";
import { IMovie } from "../../../models/Movie";
import { Nullable } from "../../../util";
import { ReactComponent as Spinner } from '../../../spinner.svg';

import "./style.css";
import Heading from "../../../components/Heading";

export interface IProps {
  onChange: (value: string) => void;
  value: string;
  isFetching: boolean;
  results: Nullable<IMovie[]>
}

const SearchView = ({ onChange, value, isFetching, results }: IProps) => (
  <div className="Search">
    <div className="input-container">
      <SearchInput onChange={onChange} value={value} placeholder="Search..." />
    </div>
    <div className="results">
      <div className="heading-container">{isFetching || results !== null ? <Heading>Search results</Heading> : null}</div>
      {isFetching ? <Spinner /> : null}
      {results
        ? results.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        : null}
    </div>
  </div>
);

export default SearchView;
