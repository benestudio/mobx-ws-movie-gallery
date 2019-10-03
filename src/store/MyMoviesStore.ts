import RootStore from "./RootStore";

export default class MyMoviesStore {
  private rootStore: RootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
  }
}