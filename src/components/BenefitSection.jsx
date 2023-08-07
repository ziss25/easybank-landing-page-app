import React, { useEffect } from 'react';
// resources benefit
import { contentBenefit } from '../utils/util.js';

const BenefitSection = () => {
  return (
    <section className="bg-[var(--VeryLightGray)] py-10 text-center px-10 md:text-start md:py-28">
      <section className="contain my-max-width mx-auto" data-aos="fade-up" data-aos-duration="1500">
        <div className="header-section md:w-[450px]">
          <h3 className="text-2xl mb-3">Why choose Easybank?</h3>
          <p className="mb-16 text-[var(--GrayishBlue)]">We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.</p>
        </div>
        <ul className="body-section grid md:grid-cols-4 gap-10">
          {contentBenefit.map((benefit, index) => (
            <li key={index} className="item flex flex-col justify-center items-center">
              <img className="w-16 md:w-20 mb-4" src={benefit.images} alt="" />
              <h4 className="mb-4 text-lg">{benefit.title}</h4>
              <p className="text-[var(--GrayishBlue)]">{benefit.description}</p>
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default BenefitSection;
