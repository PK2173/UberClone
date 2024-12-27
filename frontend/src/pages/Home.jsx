import React from 'react';
import traficLight from '../assets/traficLight.png';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div
        className="bg-cover bg-no-repeat bg-left-bottom h-screen pt-8 flex justify-between flex-col bg-red-400"
        style={{ backgroundImage: `url(${traficLight})` }}
      >
        <div className='w-16 ml-8'></div>
        <div className="bg-white pb-7 px-4 py-4">
          <h2 className="text-2xl font-bold">Get Started with Uber</h2>
          <Link to='./login' className="flex justify-center items-center w-full bg-black text-white py-3 rounded mt-5">
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;