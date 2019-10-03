import React, { useCallback, useRef, useState } from "react";
import debounce from "lodash/debounce";
import { observer } from "mobx-react";

import SearchView from "./SearchView";
import { useStore } from "../../../store";

const Search = () => {
  const store = useStore();
  const [value, updateValue] = useState("");

  const { current: search } = useRef(debounce((query: string) => store.search.searchFor(query), 500));
  const handleChange = useCallback(
    (value: string) => {
      updateValue(value);
      search(value);
    },
    [updateValue, search],
  );
  return <SearchView onChange={handleChange} value={value} results={store.search.data} isFetching={store.search.isFetching} />;
};

export default observer(Search);
