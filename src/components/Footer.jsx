import React from 'react';
import logo from '../assets/images/logo.svg';
// import fb from '../assets/images/icon-facebook.svg';
// import ig from '../assets/images/icon-instagram.svg';
// import pinterest from '../assets/images/icon-pinterest.svg';
// import twitter from '../assets/images/icon-twitter.svg';
// import yt from '../assets/images/icon-youtube.svg';
import Button from './Button';

import { socialMediaIcon } from '../utils/util.js';
const Footer = () => {
  return (
    <>
      {/* mobile footer */}
      <footer className="bg-[var(--DarkBlue)] py-5 overflow-hidden lg:hidden">
        <div className="company-log translate-x-3 flex justify-center  relative mx-auto">
          <img className="absolute top-1 -translate-x-2 translate-y-1" src={logo} alt="" />
          <div className="bg-[var(--DarkBlue)] absolute z-10 top-1">
            <h3 className="text-white font-bold text-lg">easybank</h3>
          </div>
        </div>
        <div className="social-media flex justify-center pt-14">
          <ul className="flex gap-2">
            {socialMediaIcon.map((icons, index) => (
              <li key={index}>
                <img src={icons.icon} alt="icon-social-media" />
              </li>
            ))}
          </ul>
        </div>
        <div className="list my-8 text-center text-[var(--LightGrayishBlue)] text-sm font-light">
          <ul className="flex flex-col gap-2">
            <li>About Us</li>
            <li>Contact</li>
            <li>Blog</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient flex items-center justify-center w-36 h-10 text-xs rounded-full text-white font-bold hover:opacity-70 transition mb-4">Request Invite</button>
        </div>
        <div className="copyright flex justify-center text-[var(--GrayishBlue)] text-xs">
          <p>zissCode. All Rights Reserved</p>
        </div>
      </footer>

      {/* desktop footer */}
      <footer className=" bg-[var(--DarkBlue)] ">
        <div className="max-w-6xl hidden mx-auto justify-between py-14 lg:flex items-center px-3">
          <div className="section-right flex gap-20" data-aos="fade-right" data-aos-duration="2000" data-aos-delay="100">
            <div className="logo-and-socialMedia">
              <div className="company-logo  flex">
                <img className="translate-x-9" src={logo} alt="" />
                <div className="bg-[var(--DarkBlue)] z-10 top-1">
                  <h3 className="text-white font-bold text-xl -translate-x-16">easybank</h3>
                </div>
              </div>
              <div className="social-media flex justify-center pt-8">
                <ul className="flex gap-3">
                  {socialMediaIcon.map((icons, index) => (
                    <li className="cursor-pointer" key={index}>
                      <img src={icons.icon} alt="icon-social-media" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="list-1 ">
              <div className="list  text-center text-[var(--LightGrayishBlue)] font-light">
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-[var(--LimeGreen)]">About Us</li>
                  <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Contact</li>
                  <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Blog</li>
                </ul>
              </div>
            </div>
            <div className="list-2 ">
              <div className="list  text-center text-[var(--LightGrayishBlue)] font-light">
                <ul className="flex flex-col gap-3">
                  <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Careers</li>
                  <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Support</li>
                  <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
          /
          <div className="section-left flex flex-col items-end" data-aos="fade-left" data-aos-duration="2000" data-aos-delay="100">
            <div className="mb-4 scale-90 2xl:scale-100">
              <Button size="medium" />
            </div>
            <div className="copyright flex justify-center text-[var(--GrayishBlue)] text-sm">
              <p className="cursor-pointer hover:text-[var(--LimeGreen)]">zissCode. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
