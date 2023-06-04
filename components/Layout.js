import Head from 'next/head';
import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars } from 'react-icons/fa';

const Layout = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openMenu = () => {
    //setIsOpen(true);
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };
  return (
    <>
      <Head>
        <title>{title ? title + ' - @saitah.' : 'Saitah Web'}</title>
        <meta
          name="description"
          content="Brian Saitabau Passiany - A Programmer, Fullstack Developer and a UI Ux Designer"
        />
      </Head>
      <div className="scrollbar scrollbar-thumb-blue-500 scrollbar-track-slate-500">
        <header className="fixed top-0 left-0 right-0 z-50 content-center justify-around w-full bg-blue-500 shadow md:px-3 md:py-5 md:bg-white md:flex ">
          <div className="flex items-center justify-between px-3 py-3 bg-white md:my-0 md:p-0">
            <Link href="/">
              <span className="text-2xl font-bold text-blue-500">Saitah.</span>
            </Link>

            <span className="cursor-pointer md:hidden">
              <FaBars
                className="text-2xl hover:text-blue-500"
                onClick={openMenu}
              />
            </span>
          </div>
          {/* <nav className="h-0 overflow-hidden transition-all md:h-auto md:overflow-auto"> */}
          <nav
            className={`overflow-hidden ${
              isOpen ? 'h-auto' : 'h-0'
            } transition-height duration-1000 ease-in-out`}
          >
            <ul className="flex flex-col content-center justify-center gap-5 px-3 py-3 md:flex-row md:py-0 md:px-0 ">
              <li>
                <Link href="/">
                  <span className="font-bold transition-all hover:text-blue-500">
                    Home
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#about">
                  <span className="font-bold transition-all hover:text-blue-500">
                    About
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#resume">
                  <span className="font-bold transition-all hover:text-blue-500">
                    Resume
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#resume">
                  <span className="font-bold transition-all hover:text-blue-500">
                    Services
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#projects">
                  <span className="font-bold transition-all hover:text-blue-500">
                    Projects
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#testimonials">
                  <span className="font-bold transition-all hover:text-blue-500">
                    Testimonials
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#contact">
                  <span className="font-bold transition-all hover:text-blue-500">
                    Contact
                  </span>
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {/* Children */}
        <main className="z-10">{children}</main>
        {/* Children */}
        <footer className="flex items-center justify-center h-10 p-10 font-bold text-white bg-blue-500 ">
          Copyright &copy; 2023 Brian Saitabau
        </footer>
      </div>
    </>
  );
};

export default Layout;
