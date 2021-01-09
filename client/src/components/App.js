import './App.css';

import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../queries';
import SingleCar from './Car/SingleCar';

const App = () => {
  const { data, error, loading } = useQuery(GET_ALL_CARS);

  if (loading) return <h4>Loading</h4>;
  if (error) return <h4>Error</h4>;

  debugger;
  console.log(data);
  // return <h1>Hi</h1>;

  return data.getAllCars.map((car) => (
    <ul className='App'>
      <SingleCar {...car} key={car._id} />
    </ul>
  ));
};

export default App;
