import React from 'react';
import logo from '../assets/images/logo.svg';
import close from '../assets/images/icon-close.svg';
import logoHamb from '../assets/images/icon-hamburger.svg';
import { linkList } from '../utils/util';
import Button from './Button';

const Header = ({ setIsOpen, isOpen }) => {
  return (
    <header className="header fixed border top-0 left-0 right-0 shadow-md z-50 bg-white  ">
      <div className="wrapped h-14 flex justify-between items-center px-3  md:max-w-7xl md:mx-auto 2xl:h-16">
        <div>
          <img className="lg:w-32 2xl:w-44" src={logo} alt="logo-company" />
        </div>
        <button
          className="md:hidden cursor-pointer"
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          <img className="" src={isOpen ? close : logoHamb} alt="logo-company" />
        </button>
        <nav className="hidden md:block ">
          <ul className="nav flex gap-5 font-normal text-[var(--GrayishBlue)]">
            {linkList.map((link, index) => (
              <li className="2xl:text-lg" key={index}>
                <a href="">{link}</a>
                <div></div>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex scale-90 2xl:scale-100">
          <Button size="medium" />
        </div>
      </div>
    </header>
  );
};

export default Header;
