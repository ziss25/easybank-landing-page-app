import React, { useEffect } from 'react';

import iconOnline from '../assets/images/icon-online.svg';
import iconBudgeting from '../assets/images/icon-budgeting.svg';
import iconApi from '../assets/images/icon-api.svg';
import iconOnBoarding from '../assets/images/icon-onboarding.svg';

const BenefitSection = () => {
  return (
    <section className="bg-[var(--VeryLightGray)] py-10 text-center px-10 md:text-start md:py-28">
      <section className="contain my-max-width mx-auto" data-aos="fade-up" data-aos-duration="1500">
        <div className="header-section md:w-[450px]">
          <h3 className="text-2xl mb-3">Why choose Easybank?</h3>
          <p className="mb-16 text-[var(--GrayishBlue)]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <ul className="body-section grid md:grid-cols-4 gap-10">
          <li className="item flex flex-col justify-center items-center">
            <img className="w-16 md:w-20 mb-4" src={iconOnline} alt="" />
            <h4 className="mb-4 text-lg">Online Banking</h4>
            <p className="text-[var(--GrayishBlue)]">Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.</p>
          </li>
          <li className="item flex flex-col justify-center items-center">
            <img className="w-16 md:w-20 mb-4" src={iconBudgeting} alt="" />
            <h4 className="mb-4 text-lg">Simple Budgeting</h4>
            <p className="text-[var(--GrayishBlue)]">See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.</p>
          </li>
          <li className="item flex flex-col justify-center items-center">
            <img className="w-16 md:w-20 mb-4" src={iconApi} alt="" />
            <h4 className="mb-4 text-lg">Open API</h4>
            <p className="text-[var(--GrayishBlue)]">Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.</p>
          </li>
          <li className="item flex flex-col justify-center items-center">
            <img className="w-16 md:w-20 mb-4" src={iconOnBoarding} alt="" />
            <h4 className="mb-4 text-lg">Fast Onboarding</h4>
            <p className="text-[var(--GrayishBlue)]">We don’t do branches. Open your account in minutes online and start taking control of your finances right away.</p>
          </li>
        </ul>
      </section>
    </section>
  );
};

export default BenefitSection;
