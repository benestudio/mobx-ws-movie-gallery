import React from 'react';

import Watchlist from './Watchlist';
import Search from './Search';

import './style.css';

const HomeView = () => (
  <div className="Home">
    <Search />
    <Watchlist />
  </div>
);

export default HomeView;
