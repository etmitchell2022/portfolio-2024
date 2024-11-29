import CustomMap from "../components/map";
import IntroHeaderAnimation from "../components/animations/IntroHeaderAnimation";
import AnimatedDTLogo from "@/components/animations/AnimatedDTLogo";
import WiggleImage from "@/components/wiggle-image";
import portraitImage from "../assets/images/portrait.jpg";
import { FaRegCalendar } from "react-icons/fa";
import { IoBriefcaseOutline, IoSchoolOutline } from "react-icons/io5";
import { AnimatedBSULogo } from "@/components/animations/AnimatedBSULogo";
import Clock from "@/components/clock";
import CountUp from "react-countup";

const Home = () => {
  return (
    <div className="min-w-full min-h-screen bg-custom-bg flex flex-col items-center">
      {/* Sticky Map */}
      <div className="max-w-[48rem] min-h-screen bg-custom-bg flex flex-col items-center">
        <div className="sticky top-0 z-0 h-[220px] w-full">
          <CustomMap />
          <div className="absolute top-2 left-2">
            <Clock />
          </div>
        </div>

        {/* Gradient Transition */}
        <div className="absolute top-36 left-0 w-full h-24 bg-custom-gradient z-10"></div>

        {/* Content Section */}
        <div className="relative z-20 w-full bg-custom-bg">
          <div className="w-full mx-auto px-4 py-8">
            {/* Header Section */}
            <div className="pb-8">
              <div className="flex items-end justify-between -mt-[200px]">
                <IntroHeaderAnimation />
                <div className="mr-8">
                  <WiggleImage imageSrc={portraitImage} />
                </div>
              </div>
              <div className="mt-10">
                <p className="text-white text-lg leading-8 font-sans font-thin">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
                  eveniet consequatur beatae labore dignissimos enim magni cum
                  expedita reiciendis pariatur? Lorem ipsum, dolor sit amet
                  consectetur adipisicing elit. Debitis, fuga.
                </p>
              </div>
            </div>

            {/* Work Section */}
            <div className="mt-8">
              <h1 className="text-white text-3xl leading-8 font-sans font-thin">
                Work
              </h1>
              <div className="flex items-center mt-4">
                <AnimatedDTLogo size={20} />
                <div className="ml-3">
                  <h1 className="text-white text-xl font-sans mb-1">
                    DeveloperTown
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <div className="flex items-center">
                      <IoBriefcaseOutline className="mr-2" />
                      <span>Software Engineer</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegCalendar className="mr-2" />
                      <span>January 2022 - Present</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="py-2">
                <p className="text-gray-200 text-sm leading-8 font-sans">
                  At{" "}
                  <span className="text-dt-blue font-semibold">
                    DeveloperTown
                  </span>
                  , I have developed and delivered mission-critical software
                  across multiple industries. This includes building an app for
                  a major airline that is used on{" "}
                  <span>
                    <CountUp end={1000} duration={1.5} />
                  </span>
                  + flights daily by pilots and flight attendants, as well as
                  creating a platform in the commercial real estate space to
                  provide clients with insights into their data and connectors,
                  handling billions of data points. Along the way, I've deepened
                  my expertise across many technologies, solving complex,
                  real-world problems.
                </p>
              </div>
              <div className="flex items-center mt-4">
                <AnimatedDTLogo size={20} />
                <div className="ml-3">
                  <h1 className="text-white text-xl font-sans mb-1">
                    DeveloperTown
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <div className="flex items-center">
                      <IoBriefcaseOutline className="mr-2" />
                      <span>Software Engineer Intern</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegCalendar className="mr-2" />
                      <span>May 2021 - August 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* More Content */}
            <div className="mt-8">
              <h1 className="text-white text-3xl leading-8 font-sans font-thin">
                School
              </h1>
              <div className="flex items-center mt-4">
                <AnimatedBSULogo size={30} />
                <div className="ml-3">
                  <h1 className="text-white text-xl font-sans mb-1">
                    Ball State University
                  </h1>
                  <div className="flex items-center text-gray-400 text-sm space-x-4">
                    <div className="flex items-center">
                      <IoSchoolOutline className="mr-2" />
                      <span>Computer Science</span>
                    </div>
                    <div className="flex items-center">
                      <FaRegCalendar className="mr-2" />
                      <span>August 2018 - December 2021</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
