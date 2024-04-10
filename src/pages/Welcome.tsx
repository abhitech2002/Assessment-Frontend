import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import InfinityImg from '../images/Infinity.png';
import PlatformImg from '../images/platform.png';
import RealImg from '../images/real.png';

const Welcome: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-8">
        <h1 className="text-4xl text-[#4B0082] font-semibold">Welcome to Denaurlen</h1>
        <p className="text-lg text-[#343434] font-medium">Gamify with Smart Savvy Social Network</p>
      </div>

      <div className="grid grid-cols-3 gap-4 w-full h-4/6">
        <div className="col-span-1 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Activity to Infinity</h2>
          <img src={InfinityImg} alt="Random" className="w-full" />
        </div>

        <div className="col-span-1 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">One Platform Multiple Persona</h2>
          <img src={PlatformImg} alt="Random" className="w-full" />
        </div>

        <div className="col-span-1 flex flex-col items-center">
          <h2 className="text-xl font-semibold mb-4">Real You, Rewards for You!</h2>
          <img src={RealImg} alt="Random" className="w-full" />
        </div>
      </div>

      <div className="mt-8 mb-5">
        <Link to="/register">
          <button className="bg-[#4B0082] hover:bg-[#4c0082ce] text-white font-bold py-2 px-4 rounded">
            Get Started
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
