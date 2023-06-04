import Link from 'next/link';
import React from 'react';
import {
  FaAndroid,
  FaDesktop,
  FaGlobe,
  FaLayerGroup,
  FaMedal,
  FaTint,
} from 'react-icons/fa';

const Resume = () => {
  return (
    <div className="min-h-screen py-16 md:grid md:grid-cols-3" id="resume">
      <div className="sticky mt-0 top-0 items-center justify-center hidden h-[50vh] py-3 m-auto  md:flex md:col-span-1 ">
        <ul className="=">
          <li>
            <Link href="#education">Education</Link>
          </li>
          <li>
            <Link href="#experience">Experience</Link>
          </li>
          <li>
            <Link href="#skills">Skills</Link>
          </li>
        </ul>
      </div>

      <div className="pt-16 pb-3 md:col-span-2 ">
        {/* Education Section */}
        <div id="education">
          <h1 className="mb-3 text-4xl font-bold text-blue-500">Education</h1>
          <div>
            {/* Single Card */}
            <div className="flex gap-2 my-5 ">
              <FaMedal className="mt-2 text-3xl text-blue-500" />
              <div className="w-full pb-3 mx-3 border-b-4 border-blue-500">
                <h1 className="text-2xl font-bold text-blue-500">
                  2017 - 2021
                </h1>
                <h1 className="text-2xl">
                  Kenya Certificate of Secondary Education
                </h1>
                <h1 className="">Cheptenye Boys Secondary School</h1>
                <h1 className="">Mean Grade: B+ 71</h1>
              </div>
            </div>

            {/* Single Card */}
            <div className="flex gap-2 my-5 ">
              <FaMedal className="mt-2 text-3xl text-blue-500" />
              <div className="w-full pb-3 mx-3 border-b-4 border-blue-500">
                <h1 className="text-2xl font-bold text-blue-500">
                  2022 - 2025
                </h1>
                <h1 className="text-2xl">
                  Bachelor of Science in Information Technology
                </h1>
                <h1 className="">Kaimosi Friends University</h1>
                <h1 className="">
                  Mean Grade:{' '}
                  <span className="italic font-bold">
                    Currently in progress
                  </span>
                </h1>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div id="experience">
          <h1 className="mb-3 text-4xl font-bold text-blue-500">Experience</h1>
          <div>
            {/* Single Card */}
            <div className="flex gap-2 my-5 ">
              <FaMedal className="mt-2 text-3xl text-blue-500" />
              <div className="w-full pb-3 mx-3 border-b-4 border-blue-500">
                <h1 className="text-2xl font-bold text-blue-500">From 2022</h1>
                <h1 className="text-2xl">Software Developer</h1>
                <div className="grid-cols-2 gap-5 mt-2 sm:grid ">
                  <div className="">
                    <div className="items-start card">
                      <FaAndroid className="text-4xl text-blue-500" />
                      <h1 className="text-xl font-bold">Android App</h1>
                      <h1 className="text-xl font-bold">Developer </h1>
                    </div>
                  </div>
                  <div className="">
                    <div className="items-start card">
                      <FaDesktop className="text-4xl text-blue-500" />
                      <h1 className="text-xl font-bold">Desktop App </h1>
                      <h1 className="text-xl font-bold">Developer </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Card */}
            <div className="flex gap-2 my-5 ">
              <FaMedal className="mt-2 text-3xl text-blue-500" />
              <div className="w-full pb-3 mx-3 border-b-4 border-blue-500">
                <h1 className="text-2xl font-bold text-blue-500">From 2022</h1>
                <h1 className="text-2xl">FullStack Developer</h1>
                <div className="grid-cols-2 gap-5 mt-2 sm:grid ">
                  <div className="">
                    <div className="items-start card">
                      <FaGlobe className="text-4xl text-blue-500" />
                      <h1 className="text-xl font-bold">Web </h1>
                      <h1 className="text-xl font-bold">Developer </h1>
                    </div>
                  </div>
                  <div className="">
                    <div className="items-start card">
                      <FaLayerGroup className="text-4xl text-blue-500" />
                      <h1 className="text-xl font-bold">Front $ Backend </h1>
                      <h1 className="text-xl font-bold">Developer </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Single Card */}
            <div className="flex gap-2 my-5 ">
              <FaMedal className="mt-2 text-3xl text-blue-500" />
              <div className="w-full pb-3 mx-3 border-b-4 border-blue-500">
                <h1 className="text-2xl font-bold text-blue-500">From 2022</h1>
                <h1 className="text-2xl">UI/UX Designer</h1>
                <div className="grid-cols-2 gap-5 mt-2 sm:grid ">
                  <div className="">
                    <div className="items-start card">
                      <FaTint className="text-4xl text-blue-500" />
                      <h1 className="text-xl font-bold">Adobe </h1>
                      <h1 className="text-xl font-bold">XD </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div id="skills">
          <h1 className="mb-3 text-4xl font-bold text-blue-500">Skills</h1>
          <div>
            {/* Full Card */}
            <div className="grid grid-cols-2 gap-4 px-3 my-5 md:grid-cols-3 ">
              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">C & C++</h1>
                  <h1 className="">50%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-1/2 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">HTML5</h1>
                  <h1 className="">95%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-11/12 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">MySQL</h1>
                  <h1 className="">95%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-11/12 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Java</h1>
                  <h1 className="">95%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-11/12 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">CSS</h1>
                  <h1 className="">95%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-11/12 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">MongoDb</h1>
                  <h1 className="">50%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-1/2 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Node</h1>
                  <h1 className="">80%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-3/4 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">JavaScript</h1>
                  <h1 className="">80%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-3/4 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Firebase</h1>
                  <h1 className="">50%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-1/2 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">React</h1>
                  <h1 className="">80%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-3/4 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">PHP</h1>
                  <h1 className="">50%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-1/2 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Bootstrap</h1>
                  <h1 className="">95%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-11/12 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">NextJS</h1>
                  <h1 className="">80%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-3/4 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">SASS</h1>
                  <h1 className="">50%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-1/2 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Tailwind CSS</h1>
                  <h1 className="">80%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-3/4 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <h1 className="text-xl font-bold">Adobe XD</h1>
                  <h1 className="">80%</h1>
                </div>
                <div className="bg-slate-200 rounded-2xl h-[10px]">
                  <div className="w-3/4 h-full bg-blue-500 rounded-2xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copied */}
      {/* <div className="mb-12">
        <div className="h-[10px] bg-gray-200 rounded-2xl relative ">
          <div className="relative w-1/2 h-full bg-blue-500 rounded-2xl">
            <span className="absolute px-2 py-1 text-white translate-x-full bg-blue-500 rounded right-7 -top-10">
              <span className="absolute z-10 w-2 h-2  translate-x-1/2 p-1.5 rounded-sm rotate-45 bg-blue-500 -bottom-1"></span>
              50%
            </span>
          </div>
        </div>
      </div> */}
      {/* Copied */}
    </div>
  );
};

export default Resume;
