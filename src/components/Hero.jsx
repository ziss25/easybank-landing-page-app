import React from 'react';
import mockups from '../assets/images/image-mockups.png';
import bgHero from '../assets/images/bg-intro-desktop.svg';
import Button from './Button';

const Hero = () => {
  return (
    <>
      {/* mobile version */}
      <section className="justify-between items-center md:hidden mb-16 h-screen">
        <div className="hero mt-0 max-w-xl mx-auto">
          <img className="-mt-12 w-96 mx-auto " src={mockups} alt="" />
        </div>
        <div className="max-w-md mx-auto text-center mt-4 px-4" data-aos="fade-up" data-aos-duration="2000">
          <p className="font-normal text-2xl mb-3">Next generation digital banking</p>
          <p className="text-sm text-[var(--GrayishBlue)]">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
          <button className="bg-gradient flex items-center mx-auto mt-4 justify-center w-36 h-10 text-sm rounded-full text-white font-bold hover:opacity-70 transition md:block">Request invite</button>
        </div>
      </section>

      {/* desktop version */}
      <section className="hidden md:flex h-[90vh]  border ">
        <div className="w-7/12 flex items-center pl-5 lg:pl-20 lg:w-5/12 2xl:pl-48">
          <div className="content" data-aos="fade-right" data-aos-duration="2500">
            <h3 className="text-3xl mb-4 font-semibold lg:text-4xl 2xl:text-5xl">Next generation digital banking</h3>
            <p className="mb-5 text-[var(--GrayishBlue)] lg:text-lg 2xl:text-xl">Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.</p>
            <Button size="large" />
          </div>
        </div>
        <div className="w-8/12">
          <img className="absolute -top-40 -right-96 bottom-0 scale-110 lg:scale-90 lg:-right-[500px] lg:-top-72 2xl:scale-125 2xl:-top-52" src={bgHero} alt="" />
          <img className="absolute -top-20 -right-24 bottom-0 w-[400px] lg:w-[600px] 2xl:w-[850px] 2xl:-right-32" src={mockups} alt="" data-aos="fade-left" data-aos-duration="2500" />
        </div>
      </section>
    </>
  );
};

export default Hero;
