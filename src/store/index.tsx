import { useLocalStore } from "mobx-react";
import React from "react";
import ApiService from "../services/api";
import RootStore from "./RootStore";
import { Nullable } from "../util";

const storeContext = React.createContext<Nullable<RootStore>>(null);

export const StoreProvider: React.FunctionComponent = ({ children }) => {
  const store = useLocalStore(() => new RootStore(new ApiService()));
  return <storeContext.Provider value={store}>{children}</storeContext.Provider>;
};

export const useStore = () => {
  const store = React.useContext(storeContext);
  if (!store) {
    throw new Error("StoreProvider is missing");
  }
  return store;
};
