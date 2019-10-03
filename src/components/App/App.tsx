import React, { useEffect } from "react";
import Router from "./Router";
import { useStore } from "../../store";
import { observer } from "mobx-react-lite";

const App = () => {
  const store = useStore();
  useEffect(() => {
    store.app.configure();
  }, [store.app]);
  return <Router />;
};

export default observer(App);
