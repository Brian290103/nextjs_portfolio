import React from 'react';

const Banner = () => {
  return (
    <div className="grid py-8 " id="projects  ">
      <div className="flex flex-col items-center justify-center w-full h-full py-12 bg-blue-500 rounded-lg md:py-35">
        <h1 className="flex flex-col items-center gap-2 my-3 text-2xl font-bold text-white sm:flex-row">
          <span className=""> Iam Available</span>
          <span className="">for</span>
          <span className="">FreeLancing</span>
        </h1>
        <div className="grid-cols-2 gap-3 sm:grid">
          <div>
            <div className="bg-white card">
              <h1 className="text-4xl font-bold text-blue-500">342</h1>
              <h1 className="text-xl">Completed Projects</h1>
            </div>
          </div>
          <div>
            <div className="bg-white card">
              <h1 className="text-4xl font-bold text-blue-500">30</h1>
              <h1 className="text-xl"> Happy Clients</h1>
            </div>
          </div>
        </div>

        <button className="px-5 py-2 font-bold bg-white border-2 border-blue-500 rounded-full duration-400 hover:border-white hover:text-white hover:bg-blue-500 ">
          Hire Me
        </button>
      </div>
    </div>
  );
};

export default Banner;
