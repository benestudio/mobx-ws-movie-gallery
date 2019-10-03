import React from 'react';
import WatchlistView from './WatchlistView';
import { observer } from 'mobx-react';
import { useStore } from '../../../store';

const Watchlist = () => {
  const store = useStore();
  return <WatchlistView myMovies={store.myMovies.data} isEmpty={store.myMovies.isEmpty} />;
}

export default observer(Watchlist);