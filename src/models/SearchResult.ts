import { IMovie } from "./Movie";

export interface ISearchResult {
  page: number;
  results: IMovie[];
  total_results: number;
  total_pages: number;
}
