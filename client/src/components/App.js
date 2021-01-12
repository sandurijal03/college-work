import './App.css';

import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../queries';
import SingleCar from './Car/SingleCar';

const App = () => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);

  if (loading) return <h4>Loading</h4>;
  if (error) return <h4>Error</h4>;

  return data.getAllCars.map(({ brand, _id, model }) => {
    const car = { brand, _id, model };
    return (
      <ul key={_id}>
        <SingleCar {...car} />
      </ul>
    );
  });
};

export default App;
