import React from 'react';
import CustomMap from './map';

const Home = () => {
  return (
    <div className='min-w-full min-h-screen bg-custom-bg flex justify-center'>
      <div className=' w-[48rem]'>
        <CustomMap />
        <div className='absolute top-36 left-0 w-full h-24 bg-custom-gradient pointer-events-none'></div>{' '}
      </div>
    </div>
  );
};

export default Home;
