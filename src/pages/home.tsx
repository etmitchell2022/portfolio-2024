import CustomMap from "../components/map";
import IntroHeaderAnimation from "../components/animations/IntroHeaderAnimation";
import AnimatedDTLogo from "@/components/animations/AnimatedDTLogo";
import WiggleImage from "@/components/wiggle-image";
import portraitImage from "../assets/images/portrait.jpg";
import { FaRegCalendar } from "react-icons/fa";
import { IoBriefcaseOutline } from "react-icons/io5";

const Home = () => {
  return (
    <div className="min-w-full min-h-screen bg-custom-bg flex justify-center">
      <div className=" w-[48rem] relative">
        <CustomMap />
        <div className="absolute top-36 left-0 w-full h-24 bg-custom-gradient">
          <div className="flex items-end justify-between h-full p-2">
            <IntroHeaderAnimation />
            <div className="mr-8">
              <WiggleImage imageSrc={portraitImage} />
            </div>
          </div>
          <div className="mt-8 min-h-full p-2">
            <p className="text-white text-lg leading-8 font-sans font-thin">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
              eveniet consequatur beatae labore dignissimos enim magni cum
              expedita reiciendis pariatur? Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Debitis, fuga.
            </p>
          </div>
          <div className="mt-4 min-h-full p-2">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
