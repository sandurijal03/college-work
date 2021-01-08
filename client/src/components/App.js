import './App.css';

import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../queries';
import SingleCar from './Car/SingleCar';

const App = () => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);

  if (loading) <h4>Loading</h4>;
  if (error) <h4>Error</h4>;

  console.log(data);
  return (
    <ul>
      {data.getAllCars.map((car) => (
        <SingleCar {...car} key={car._id} />
      ))}
    </ul>
  );
};

export default App;
