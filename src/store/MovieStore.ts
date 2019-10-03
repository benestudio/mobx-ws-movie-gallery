import AsyncStore from "./AsyncStore";
import RootStore from "./RootStore";
import { IMovie } from "../models/Movie";
import ApiService from "../services/api";

export default class MovieStore extends AsyncStore<IMovie> {
  private apiService: ApiService;

  constructor(rootStore: RootStore, apiService: ApiService) {
    super(rootStore);
    this.apiService = apiService;
  }

  // 1. fetch movie apiService.movie(id)
  // 2. pass data to pages/Movie/Movie.tsx
  // 3. pass store.app.getImageUrl(movie.backdrop_path) to MovieDetails.tsx
}
