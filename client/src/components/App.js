import './App.css';

import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../queries';

const App = () => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);

  if (loading) <h4>Loading</h4>;
  if (error) <h4>Error</h4>;

  return (
    data ||
    data.getAllCars.map((car) => (
      <div key={car._id}>
        <h1>{car.model}</h1>
      </div>
    ))
  );
};

export default App;
