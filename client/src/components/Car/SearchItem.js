import React from 'react';
import { Link } from 'react-router-dom';

const SearchItem = ({ model, _id }) => {
  return (
    <li key={_id}>
      <Link to={`/car/${_id}`}>
        <h4>{model}</h4>
      </Link>
    </li>
  );
};

export default SearchItem;
