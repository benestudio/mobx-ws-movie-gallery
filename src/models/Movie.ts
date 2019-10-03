import { Nullable } from "../util";
import { IGenre } from "./Genre";

export interface IMovie {
  poster_path: Nullable<string>;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids?: number[];
  genres? : IGenre[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: Nullable<string>;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
  runtime: Nullable<number>;
}