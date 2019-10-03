import React, { useCallback, useRef, useState } from "react";
import debounce from "lodash/debounce";

import SearchView from "./SearchView";

const Search = () => {
  const [value, updateValue] = useState("");

  const { current: search } = useRef(debounce((query: string) => console.log(query), 500));
  const handleChange = useCallback(
    (value: string) => {
      updateValue(value);
      search(value);
    },
    [updateValue, search],
  );
  return <SearchView onChange={handleChange} value={value} results={[]} isFetching={false} />;
};

export default Search;
