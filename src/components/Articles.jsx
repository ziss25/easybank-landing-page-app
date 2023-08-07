import React from 'react';
import imgCurrency from '../assets/images/image-currency.jpg';
import imgRestaurant from '../assets/images/image-restaurant.jpg';
import imgPlane from '../assets/images/image-plane.jpg';
import imgConfetti from '../assets/images/image-confetti.jpg';

const Articles = () => {
  return (
    <section className="my-max-width py-20 mx-auto mt-5 px-8 lg:px-0">
      <h3 className="text-center mb-8 text-3xl font-medium">Latest Articles</h3>
      <ul className="wrapped grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:px-8 2xl:px-0" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
        <li className="item card border rounded-md overflow-hidden">
          <img className="w-full" src={imgCurrency} alt="" />
          <div className="card-body p-4">
            <p className="text-xs mb-2 text-[var(--GrayishBlue)]">By Claire Robinson</p>
            <h4 className="text-lg mb-2 cursor-pointer hover:text-[var(--LimeGreen)]">Receive money in any currency with no fees</h4>
            <p className="text-base text-[var5h(--GrayishBlue)]">The world is getting smaller and we’re becoming more mobile. So why should you be forced to only receive money in a single …</p>
          </div>
        </li>
        <li className="item card border rounded-md overflow-hidden">
          <img className="w-full" src={imgRestaurant} alt="" />
          <div className="card-body p-4">
            <p className="text-xs mb-2 text-[var(--GrayishBlue)]">By Wilson Hutton</p>
            <h4 className="text-lg mb-2 cursor-pointer hover:text-[var(--LimeGreen)]">Treat yourself without worrying about money</h4>
            <p className="text-base text-[var5h(--GrayishBlue)]">Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …</p>
          </div>
        </li>
        <li className="item card border rounded-md overflow-hidden">
          <img className="w-full" src={imgPlane} alt="" />
          <div className="card-body p-4">
            <p className="text-xs mb-2 text-[var(--GrayishBlue)]">By Wilson Hutton</p>
            <h4 className="text-lg mb-2 cursor-pointer hover:text-[var(--LimeGreen)]">Take your Easybank card wherever you go</h4>
            <p className="text-base text-[var5h(--GrayishBlue)]">We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …</p>
          </div>
        </li>
        <li className="item card border rounded-md overflow-hidden">
          <img className="w-full" src={imgConfetti} alt="" />
          <div className="card-body p-4">
            <p className="text-xs mb-2 text-[var(--GrayishBlue)]">By Claire Robinson</p>
            <h4 className="text-lg mb-2 cursor-pointer hover:text-[var(--LimeGreen)]">Our invite-only Beta accounts are now live</h4>
            <p className="text-base text-[var5h(--GrayishBlue)]">After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...</p>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Articles;
