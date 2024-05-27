import React from 'react'
import BestProduct from '../../Components/BestProduct/BestProduct';
import Creator from '../../Components/Creator/Creator';
import Response from '../../Components/Response/Response';
import Service from '../../Components/Service/Service';
import Slider from '../../Components/Slider/Slider';

const Home = () => {
  return (
    <div>
      <Slider />
      <Service />
      <BestProduct />
      <Creator />
      <Response />
    </div>
  )
}

export default Home