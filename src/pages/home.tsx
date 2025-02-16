import CustomMap from '../components/map';
import IntroHeaderAnimation from '../components/animations/IntroHeaderAnimation';
import AnimatedDTLogo from '@/components/animations/AnimatedDTLogo';
import WiggleImage from '@/components/wiggle-image';
import portraitImage from '../assets/images/portrait.jpg';
import { FaRegCalendar } from 'react-icons/fa';
import { IoBriefcaseOutline, IoSchoolOutline } from 'react-icons/io5';
import { GoDeviceCameraVideo } from 'react-icons/go';
import { AnimatedBSULogo } from '@/components/animations/AnimatedBSULogo';
import Clock from '@/components/clock';
import CountUp from 'react-countup';
import { ReconizeLogo } from '@/components/reconize-logo';

const Home = () => {
  return (
    <div className='min-w-full min-h-screen bg-custom-bg flex flex-col items-center'>
      {/* Sticky Map */}
      <div className='max-w-[48rem] min-h-screen bg-custom-bg flex flex-col items-center'>
        <div className='sticky top-0 z-0 h-[220px] w-full'>
          <CustomMap />
          <div className='absolute top-2 left-2'>
            <Clock />
          </div>
        </div>

        <div className='absolute top-36 left-0 w-full h-24 bg-custom-gradient z-10'></div>

        <div className='relative z-20 w-full bg-custom-bg'>
          <div className='w-full mx-auto px-2 py-8'>
            <div className='pb-8'>
              <div className='flex items-end justify-between -mt-[200px]'>
                <IntroHeaderAnimation />
                <div className='mr-2'>
                  <WiggleImage imageSrc={portraitImage} />
                </div>
              </div>
              <div className='mt-10'>
                <p className='text-white text-lg leading-8 font-sans font-thin'>
                  I'm a software engineer specializing in scalable web
                  infrastructure, developer tooling, and automation
                </p>
              </div>
            </div>

            <div className='mt-8'>
              <h1 className='text-white text-3xl leading-8 font-sans font-thin'>
                Work
              </h1>
              <div className='flex items-center mt-4'>
                <AnimatedDTLogo size={20} />
                <div className='ml-3'>
                  <h1 className='text-white text-xl font-sans mb-1'>
                    DeveloperTown
                  </h1>
                  <div className='flex items-center text-gray-400 text-sm space-x-4'>
                    <div className='flex items-center'>
                      <IoBriefcaseOutline className='mr-2' />
                      <span>Software Engineer</span>
                    </div>
                    <div className='flex items-center'>
                      <FaRegCalendar className='mr-2' />
                      <span>January 2022 - Present</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-2'>
                <p className='text-gray-200 text-sm leading-8 font-sans'>
                  At{' '}
                  <span className='text-dt-blue font-semibold'>
                    DeveloperTown
                  </span>
                  , I have developed and delivered mission-critical software
                  across multiple industries. This includes building an app for
                  a major airline that is used on{' '}
                  <span className='font-bold text-white'>
                    <CountUp end={1000} duration={1.5} />
                  </span>
                  + flights daily by pilots and flight attendants, as well as
                  creating a platform in the commercial real estate space to
                  provide clients with insights into their data and connectors,
                  handling{' '}
                  <span className='font-bold text-white'>billions</span> of data
                  points. Along the way, I've deepened my expertise across many
                  technologies, solving complex, real-world problems.
                </p>
              </div>
              <div className='flex items-center mt-4'>
                <AnimatedDTLogo size={20} />
                <div className='ml-3'>
                  <h1 className='text-white text-xl font-sans mb-1'>
                    DeveloperTown
                  </h1>
                  <div className='flex items-center text-gray-400 text-sm space-x-4'>
                    <div className='flex items-center'>
                      <IoBriefcaseOutline className='mr-2' />
                      <span>Software Engineer Intern</span>
                    </div>
                    <div className='flex items-center'>
                      <FaRegCalendar className='mr-2' />
                      <span>May 2021 - August 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-2'>
                <p className='text-gray-200 text-sm leading-8 font-sans'>
                  As an intern, I built a CLI tool to bridge the gap between
                  design and the front end developement team. It took design
                  tokens in Figma and converted them into Material UI theme
                  overrides. This tool cut the setup process of new projects as
                  the theme and components like buttons and inputs could be
                  configured automatically. A tool like this allowed for faster
                  development of key features and saved countless developer
                  hours that would previously have been used.
                </p>
              </div>
            </div>

            <div className='mt-8'>
              <h1 className='text-white text-3xl leading-8 font-sans font-thin'>
                What I'm Currently building
              </h1>
              <div className='flex items-center mt-4'>
                <ReconizeLogo size={35} />
                <div className='ml-3'>
                  <h1 className='text-white text-xl font-sans mb-1'>
                    Reconize
                  </h1>
                  <div className='flex items-center text-gray-400 text-sm space-x-4'>
                    <div className='flex items-center'>
                      <GoDeviceCameraVideo className='mr-2' />
                      <span>Private Investigation Software</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-2'>
                <p className='text-gray-200 text-sm leading-8 font-sans'>
                  I'm building{' '}
                  <span className='text-reconize-red font-semibold'>
                    Reconize
                  </span>
                  , an AI-driven platform that transforms{' '}
                  <span className='font-bold text-white'>hours</span> of raw
                  surveillance footage into actionable insights in{' '}
                  <span className='font-bold text-white'>minutes</span>.
                  Traditionally, investigators spend days manually reviewing,
                  editing, and compiling reports. Reconize automates this
                  process, detecting key events, segmenting relevant footage,
                  and generating structured reports instantly. This drastically
                  improves efficiency, reduces workload, and enhances
                  investigative accuracy—making video analysis faster, smarter,
                  and more effective.
                </p>
              </div>
            </div>

            <div className='mt-8'>
              <h1 className='text-white text-3xl leading-8 font-sans font-thin'>
                School
              </h1>
              <div className='flex items-center mt-4'>
                <AnimatedBSULogo size={30} />
                <div className='ml-3'>
                  <h1 className='text-white text-xl font-sans mb-1'>
                    Ball State University
                  </h1>
                  <div className='flex items-center text-gray-400 text-sm space-x-4'>
                    <div className='flex items-center'>
                      <IoSchoolOutline className='mr-2' />
                      <span>Computer Science</span>
                    </div>
                    <div className='flex items-center'>
                      <FaRegCalendar className='mr-2' />
                      <span>August 2018 - December 2021</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className='py-2'>
                <p className='text-gray-200 text-sm leading-8 font-sans'>
                  Senior Project: Built a web application for Ball State to
                  provide a no-cost alternative for obtaining regalia (caps,
                  gowns, hoods) for university events. The project was adopted
                  by Ball State faculty starting in Fall 2021.
                </p>

                <p className='text-gray-400 text-sm leading-8 font-sans'>
                  Awards: Dean's List Spring 2019, Fall 2019, Spring 2020, Fall
                  2020, Spring 2021, Fall 2021
                </p>
                <p className='text-gray-400 text-sm leading-8 font-sans'>
                  Treasurer: Association of Information Technology Professionals
                  (AITP)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
