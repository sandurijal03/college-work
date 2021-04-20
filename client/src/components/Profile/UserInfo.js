import React from 'react';
import { Link } from 'react-router-dom';

const UserInfo = ({ session }) => {
  const { firstName, lastName, email, favourites } = session.getCurrentUser;
  let fullName = firstName + ' ' + lastName;

  return (
    <div>
      <h3>User Info</h3>
      <p>fullName: {fullName}</p>
      <p>Email: {email}</p>
      <ul>
        <h3>{firstName}'s favourites</h3>
        {!favourites ? (
          <h2>List is empty</h2>
        ) : (
          favourites.map((favourite) => (
            <li key={favourite._id}>
              <Link to={`/cars/${favourite._id}`}>
                <p>{favourite.model}</p>
              </Link>
            </li>
          ))
        )}
        {!session.getCurrentUser.favourites.length && (
          <p>
            <strong>You have no favourites currently.</strong>
          </p>
        )}
      </ul>
    </div>
  );
};

export default UserInfo;
