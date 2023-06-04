import React from 'react';
import Image from 'next/image';
import Profile from '../public/images/profile.png';
import {
  FaDribbble,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="gap-2 pt-32 md:min-h-screen md:pt-0 md:grid md:grid-cols-2">
      <div className="order-2 p-2 m-auto rounded-full md:border-4 md:border-blue-500 w-">
        {' '}
        <Image
          className="m-auto rounded-full cursor-pointer w-fit hover:opacity-90"
          src={Profile}
          alt="my-image"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col items-center justify-center order-1 py-5 m-auto md:items-start md:py-0">
        <div className="">
          <h1 className="mb-3 text-2xl md:text-3xl">Hello I&apos;m </h1>
          <h1 className="text-4xl md:text-6xl font-[Bellota]">
            Brian Saitabau
          </h1>
        </div>
        <div className="py-3">
          <ul className="flex gap-3">
            <li>
              <Link href="https://www.facebook.com">
                <span>
                  <FaFacebook className="text-2xl transition-all hover:text-blue-500" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://www.twitter.com">
                <span>
                  <FaTwitter className="text-2xl transition-all hover:text-blue-500" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://www.instagram.com">
                <span>
                  <FaInstagram className="text-2xl transition-all hover:text-blue-500" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com">
                <span>
                  <FaLinkedin className="text-2xl transition-all hover:text-blue-500" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://www.youtube.com">
                <span>
                  <FaYoutube className="text-2xl transition-all hover:text-blue-500" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://www.github.com">
                <span>
                  <FaGithub className="text-2xl transition-all hover:text-blue-500" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="https://www.dribbble.com">
                <span>
                  <FaDribbble className="text-2xl transition-all hover:text-blue-500" />
                </span>
              </Link>
            </li>
          </ul>
          <button className="btn-primary">Download CV</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
