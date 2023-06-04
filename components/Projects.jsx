import React from 'react';
import Profile from '../public/images/smart-school.png';
import Image from 'next/image';
import Link from 'next/link';

const Projects = () => {
  return (
    <div className="grid min-h-screen py-16 " id="services ">
      <div className="flex flex-col items-center justify-center w-full col-span-1 py-3 m-auto ">
        <h1 className="text-3xl font-bold text-blue-500"> Projects</h1>
        <h1 className="">My Recent Works</h1>
        <Link
          href="/projects"
          target="_blank"
          className="transition-all hover:translate-x-3"
        >
          <span className="text-lg font-thin text-blue-500 underline">
            View all
          </span>
        </Link>

        {/* Grid Begins */}
        <div className="grid-cols-2 gap-2 p-3 my-3 sm:grid md:grid-cols-3 lg:grid-cols-4">
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
          <div className="h-[220px]">
            <div className="flex flex-col items-start justify-center h-full p-2 card">
              <Image
                width={200}
                height={100}
                className="rounded-lg"
                alt="Project Logo"
                src={Profile}
              ></Image>
              <h1 className="text-xl font-bold">Java</h1>
              <h1 className="">Android Smart School</h1>
            </div>
          </div>
        </div>
        {/* Grid Ends */}
        <div className="hidden">
          <div className="grid grid-cols-8 border rounded-lg gap-x-[1px]  ">
            <div className="col-span-3 px-2 pt-1 duration-700 border cursor-pointer rounded-s-lg hover:bg-blue-500 hover:text-white ">
              <span className="font-bold ">Previous</span>
            </div>
            <div className="col-span-1 px-2 pt-1 border cursor-pointer hover:bg-blue-500 hover:text-white ">
              <span className="font-bold">1</span>
            </div>
            <div className="col-span-1 px-2 pt-1 border cursor-pointer hover:bg-blue-500 hover:text-white ">
              <span className="font-bold">2</span>
            </div>
            <div className="col-span-1 px-2 pt-1 border cursor-pointer hover:bg-blue-500 hover:text-white ">
              <span className="font-bold">3</span>
            </div>
            <div className="col-span-2 px-2 pt-1 border cursor-pointer rounded-e-lg hover:bg-blue-500 hover:text-white ">
              <span className="font-bold">Next</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
