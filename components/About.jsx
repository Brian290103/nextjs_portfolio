import React from 'react';
import Profile from '../public/images/profile.png';

import Image from 'next/image';
import { FaAndroid, FaDraftingCompass, FaGlobe } from 'react-icons/fa';

const About = () => {
  return (
    <div
      className="grid min-h-screen grid-cols-1 py-16 md:grid-cols-3 "
      id="about"
    >
      <div className="col-span-1 py-3 m-auto ">
        {' '}
        <Image
          src={Profile}
          className="w-fit h-fit"
          alt="profile-image"
          width={300}
          height={300}
        ></Image>
      </div>
      <div className="col-span-2 py-3 m-auto ">
        <h1 className="my-2 text-3xl text-blue-500">About Me</h1>
        <div>
          <div>
            <table>
              <tbody>
                <tr>
                  <th className="">Name:</th>
                  <td>Brian Saitabau</td>
                </tr>
                <tr>
                  <th>Gender:</th>
                  <td>Male</td>
                </tr>
                <tr>
                  <th>Date of Birth:</th>
                  <td>29th January, 2023</td>
                </tr>
                <tr>
                  <th>Address:</th>
                  <td>P.O. Box 11, Narok - Kenya</td>
                </tr>
                <tr>
                  <th>Zipcode:</th>
                  <td>20500</td>
                </tr>
                <tr>
                  <th>Email:</th>
                  <td>briansaitabau29@gmail.com</td>
                </tr>
                <tr>
                  <th>Phone:</th>
                  <td>+254 759 636 663</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 py-3 md:grid-cols-3 lg:grid-cols-3">
            <div className="p-2 my-2">
              <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-1">
                <FaAndroid className="my-2 text-5xl text-blue-500" />
                <h1 className="text-xl">Software </h1>
                <h1 className="text-xl">Developer </h1>
              </div>
            </div>

            <div className="p-2 my-2">
              <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-1">
                <FaGlobe className="my-2 text-5xl text-blue-500" />
                <h1 className="text-xl">Web </h1>
                <h1 className="text-xl">Developer </h1>
              </div>
            </div>
            <div className="p-2 my-2">
              <div className="transition-all cursor-pointer card hover:opacity-90 hover:-translate-y-1">
                <FaDraftingCompass className="my-2 text-5xl text-blue-500" />
                <h1 className="text-xl">UI/Ux </h1>
                <h1 className="text-xl">Designer </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
