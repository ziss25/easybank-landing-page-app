import React from 'react';

const Button = ({ size }) => {
  return (
    <>
      {size === 'medium' ? (
        <button className="bg-gradient flex items-center justify-center w-36 h-10 text-sm rounded-full text-white font-bold hover:opacity-70 transition">Request Invite</button>
      ) : (
        <button className="px-6 py-2 bg-gradient rounded-full text-white hover:opacity-75 lg:text-lg 2xl:px-10 2xl:text-xl 2xl:py-3">Request invite</button>
      )}
    </>
  );
};

export default Button;
