import React from 'react';
import CustomMap from '../components/map';
import IntroHeaderAnimation from '../components/animations/IntroHeaderAnimation';

const Home = () => {
  return (
    <div className='min-w-full min-h-screen bg-custom-bg flex justify-center'>
      <div className=' w-[48rem] relative'>
        <CustomMap />
        <div className='absolute top-36 left-0 w-full h-24 bg-custom-gradient pointer-events-none'>
          <div className='flex items-end h-full p-2'>
            <IntroHeaderAnimation />
          </div>
          <div className='mt-8 min-h-full p-2'>
            <p className='text-white text-lg leading-8 font-sans font-thin'>
              I'm a software engineer specializing in web development and
              frontend infrastructure. My passion is improving Developer
              Experience (DX) by creating tools to make development easier.
            </p>
          </div>
          <div className='mt-4 min-h-full p-2'>
            <h1 className='text-white text-2xl leading-8 font-sans font-thin'>
              Work
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
