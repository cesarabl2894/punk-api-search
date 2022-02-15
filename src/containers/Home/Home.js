import React, { useState } from 'react';
import SearchBar from 'components/SearchBar/SearchBar';
import CardGroup from 'components/CardGroup/CardGroup';
import NoResults from 'components/NoResults/NoResults';
import Loader from 'components/Loader/Loader';
import { BASE_URL } from 'config/api';
import './HomeStyles.css';

const Home = () => {
  const [keyword, setKeyword] = useState('');
  const [searchResults, setResults] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [showNoResults, setShowNoResults] = useState(false);
  let currentView = null;

  const updateKeyword = (event) => {
    const newKeyword = event.target.value;

    setKeyword(newKeyword);
  };

  const fetchSearchResults = async () => {
    const response = await fetch(`${BASE_URL}?beer_name=${keyword}`);
    const results = await response.json();

    setResults(results);
    setLoading(false);
  };

  const updateSearch = (event) => {
    event.preventDefault();

    if (keyword && keyword !== '') {
      setLoading(true);
      fetchSearchResults();
      setShowNoResults(true);
    }
  };

  if (!isLoading) {
    if (searchResults.length > 0) {
      currentView = <CardGroup items={searchResults} />;
    } else {
      currentView = showNoResults && <NoResults />;
    }
  }

  return (
    <div className="container">
      <div className="mt-5">
        <h2 className="display-5 mt-3 ">Punk API Search</h2>
        <p className="lead mt-1 mb-5">Search for your favourite Beer 🍻</p>
        <form onSubmit={updateSearch}>
          <SearchBar inputHandler={updateKeyword} currentValue={keyword} />
        </form>
        {!isLoading ? currentView : <Loader />}
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
