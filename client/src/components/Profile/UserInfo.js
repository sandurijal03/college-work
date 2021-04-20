import React from 'react';
import { Link } from 'react-router-dom';

const formatDate = (date) => {
  const newDate = new Date(date).toLocaleDateString('en-US');
  const newTime = new Date(date).toLocaleTimeString('en-US');
  return `${newDate} at ${newTime}`;
};

const UserInfo = ({ session }) => {
  const { firstName, lastName, email, favourites } = session.getCurrentUser;
  let fullName = firstName + ' ' + lastName;

  return (
    <div>
      <h3>User Info</h3>
      <p>fullName: {fullName}</p>
      <p>Email: {email}</p>
      <p>Joined Date: {formatDate(session.getCurrentUser.createdAt)}</p>
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
