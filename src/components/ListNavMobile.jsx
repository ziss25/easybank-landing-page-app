import React from 'react';

const ListNavMobile = ({ isOpen }) => {
  return (
    <section className="listNavMobile md:hidden">
      {isOpen ? (
        <>
          <div className="fixed top-0 right-0 left-0 bottom-0 z-40 bg-black opacity-50">anjay</div>
          <div className="fixed top-[75px] z-50 bg-white right-5 left-5 rounded-md">
            <ul className="flex flex-col items-center py-10 gap-6">
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default ListNavMobile;
