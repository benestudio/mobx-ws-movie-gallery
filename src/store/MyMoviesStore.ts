import RootStore from "./RootStore";
import { IMovie } from "../models/Movie";
import { observable, action, computed } from "mobx";

export default class MyMoviesStore {
  private rootStore: RootStore;

  @observable
  public data = [] as IMovie[];

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }

  @action
  public addMovie(movie: IMovie) {
    this.data = [...this.data, movie];
  }

  @action
  public removeMovie(movie: IMovie) {
    const index = this.data.findIndex(m => m.id === movie.id);
    if (index >= 0) {
      this.data.splice(index, 1);
    }
  }

  public contains(movie: IMovie) {
    const index = this.data.findIndex(m => m.id === movie.id);
    return index >= 0;
  }

  @computed
  get isEmpty() {
    return this.data.length === 0;
  }
}