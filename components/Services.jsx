import React from 'react';
import {
  FaAndroid,
  FaDesktop,
  FaDraftingCompass,
  FaGlobe,
  FaLayerGroup,
  FaPallet,
} from 'react-icons/fa';

const Services = () => {
  return (
    <div className="grid min-h-screen py-16 " id="services ">
      <div className="flex flex-col items-center justify-center w-full col-span-1 py-3 m-auto ">
        <h1 className="text-3xl font-bold text-blue-500 ">Services</h1>
        <h1 className="">What I do</h1>

        {/* Full */}
        <div className="w-11/12 grid-cols-2 gap-4 my-5 sm:grid md:grid-cols-3">
          <div>
            <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-2">
              <FaPallet className="my-3 text-4xl text-blue-500" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-2xl">Web</h1>
                <h1 className="text-2xl">Design</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-2">
              <FaGlobe className="my-3 text-4xl text-blue-500" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-2xl">Web</h1>
                <h1 className="text-2xl">Development</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-2">
              <FaLayerGroup className="my-3 text-4xl text-blue-500" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-2xl">FullStack</h1>
                <h1 className="text-2xl">Development</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-2">
              <FaAndroid className="my-3 text-4xl text-blue-500" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-2xl">Android App</h1>
                <h1 className="text-2xl">Development</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-2">
              <FaDesktop className="my-3 text-4xl text-blue-500" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-2xl">Desktop App</h1>
                <h1 className="text-2xl">Development</h1>
              </div>
            </div>
          </div>

          <div>
            <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-2">
              <FaDraftingCompass className="my-3 text-4xl text-blue-500" />
              <div className="flex flex-col items-center justify-center gap-1">
                <h1 className="text-2xl">UI/UX</h1>
                <h1 className="text-2xl">Design</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
