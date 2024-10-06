import React from 'react';
import CustomMap from './map';

const Home = () => {
  return (
    <div className='min-w-full min-h-screen bg-custom-bg flex justify-center'>
      <div className=' w-[48rem]'>
        <CustomMap />
      </div>
    </div>
  );
};

export default Home;
