import React from 'react';

const ListNavMobile = ({ isOpen }) => {
  return (
    <section className="listNavMobile md:hidden">
      {isOpen ? (
        <>
          <div className="fixed top-0 right-0 left-0 bottom-0 z-40 bg-black opacity-50">anjay</div>
          <div className="fixed top-[75px] z-50 bg-white right-5 left-5 rounded-md">
            <ul className="flex flex-col items-center py-10 gap-6">
              <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Home</li>
              <li className="cursor-pointer hover:text-[var(--LimeGreen)]">About</li>
              <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Contact</li>
              <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Blog</li>
              <li className="cursor-pointer hover:text-[var(--LimeGreen)]">Careers</li>
            </ul>
          </div>
        </>
      ) : null}
    </section>
  );
};

export default ListNavMobile;
