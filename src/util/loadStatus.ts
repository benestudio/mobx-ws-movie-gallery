import AsyncStore from "../store/AsyncStore";

export const isLoading = <T>(store: AsyncStore<T>) => store.isFetching;

export const isLoaded = <T>(store: AsyncStore<T>) => !store.isFetching && !store.error;

export const hasError = <T>(store: AsyncStore<T>) => !store.isFetching && store.error;
