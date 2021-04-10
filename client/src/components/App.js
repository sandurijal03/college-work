import './App.css';

import { useQuery } from '@apollo/client';
import { GET_ALL_CARS } from '../queries';
import SingleCar from './Car/SingleCar';
import Cars from './Car/Cars';
import HeroSection from './HeroSection';
import Feature from './Feature';

const App = () => {
  // const { data, error, loading } = useQuery(GET_ALL_CARS);

  // if (loading) return <h4>Loading</h4>;
  // if (error) return <h4>Error</h4>;

  // return data.getAllCars.map(
  //   ({ objectId, brand, _id, model, imageUrl, category }) => {
  //     const car = { objectId, brand, _id, model, imageUrl, category };
  //     return (
  //       <ul key={_id}>
  //         <SingleCar {...car} />
  //       </ul>
  //     );
  //   },
  // );
  return (
    <>
      <HeroSection />
      <Cars />
      <Feature />
    </>
  );
};

export default App;
