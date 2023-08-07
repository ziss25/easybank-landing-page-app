import React from 'react';
// resources articles
import { contentArticle } from '../utils/util.js';

const Articles = () => {
  return (
    <section className="my-max-width py-20 mx-auto mt-5 px-8 lg:px-0">
      <h3 className="text-center mb-8 text-3xl font-medium">Latest Articles</h3>
      <ul className="wrapped grid gap-8 md:grid-cols-2 lg:grid-cols-4 md:px-8 2xl:px-0">
        {contentArticle.map((articles, index) => (
          <li key={index} className="item card border rounded-md overflow-hidden" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="200">
            <img className="w-full" src={articles.images} alt="" />
            <div className="card-body p-4">
              <p className="text-xs mb-2 text-[var(--GrayishBlue)]">{articles.author}</p>
              <h4 className="text-lg mb-2 cursor-pointer hover:text-[var(--LimeGreen)]">{articles.title}</h4>
              <p className="text-base text-[var5h(--GrayishBlue)]">{articles.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Articles;
