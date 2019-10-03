import AsyncStore from "./AsyncStore";
import ApiService from "../services/api";
import { IConfigureResult } from "../models/ConfigureResult";
import RootStore from "./RootStore";

export default class AppStore extends AsyncStore<IConfigureResult> {
  private apiService: ApiService;

  constructor(rootStore: RootStore, apiService: ApiService) {
    super(rootStore);
    this.apiService = apiService;
  }
}
