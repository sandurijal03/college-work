import React, { useState } from 'react';
import { ApolloConsumer } from '@apollo/client';

import { SEARCH_CAR } from '../../queries';
import SearchItem from './SearchItem';

const Search = () => {
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = ({ searchCar }) => {
    setSearchResults(searchCar);
  };

  return (
    <ApolloConsumer>
      {(client) => (
        <div className='App'>
          <input
            type='search'
            placeholder='search for car'
            onChange={async (e) => {
              e.persist();
              const { data } = await client.query({
                query: SEARCH_CAR,
                variables: { searchTerm: e.target.value },
              });
              handleChange(data);
            }}
          />
          <ul>
            {searchResults.map(({ _id, model }) => (
              <SearchItem model={model} _id={_id} key={_id} />
            ))}
          </ul>
        </div>
      )}
    </ApolloConsumer>
  );
};

export default Search;
