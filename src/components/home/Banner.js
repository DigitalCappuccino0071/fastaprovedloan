'use client';
import Script from 'next/script';
import React, { useState } from 'react';

const Banner = () => {
  const [frameSrc, setFrameSrc] = useState('/form.html');

  return (
    <div>
      <div
        className="relative md:h-[100vh] h-[100vh] bg-no-repeat bg-cover bg-right  "
        style={{
          backgroundImage: `url("/images/banner.jpg")`,
        }}
      >
        {' '}
        <div className='font-bold text-4xl text-center text-white pt-20'>
          Instant Loans, from $100 to $5000
        </div>
        <div className="iframe-container">
          <iframe
            title="Frame Content"
            src={frameSrc}
            className='md-w-[640px] md-h-[360px] w-full h-full'
          ></iframe>
        </div>
        {/* <div className="flex flex-col items-center h-full backdrop-blur-sm bg-black/40">
          <h1 className="font-bold text-5xl text-white mt-24 w-[60%] text-center leading-[55px]">
            {' '}
            Instant Loans, from $100 to $5000{' '}
          </h1>
        </div> */}
      </div>
    </div>
  );
};

export default Banner;
