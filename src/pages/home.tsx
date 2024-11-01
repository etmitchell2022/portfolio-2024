import CustomMap from '../components/map';
import IntroHeaderAnimation from '../components/animations/IntroHeaderAnimation';

const Home = () => {
  return (
    <div className='min-w-full min-h-screen bg-custom-bg flex justify-center'>
      <div className=' w-[48rem] relative'>
        <CustomMap />
        <div className='absolute top-36 left-0 w-full h-24 bg-custom-gradient'>
          <div className='flex items-end h-full p-2'>
            <IntroHeaderAnimation />
          </div>
          <div className='mt-8 min-h-full p-2'>
            <p className='text-white text-lg leading-8 font-sans font-thin'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              eveniet consequatur beatae labore dignissimos enim magni cum
              expedita reiciendis pariatur? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis, fuga.
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
