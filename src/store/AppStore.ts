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

  public async configure() {
    try {
      const result = await this.apiService.configure();
      this.handleSuccess(result);
    } catch (e) {
      console.log("AppStore.configure", {e});
      this.handleError(e.message);
    }
  }

  public getImageUrl(path: string) {
    if (this.data) {
      return `${this.data.images.base_url}original${path}`;
    }
    return null;
  }
}
