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
        <div className="font-bold text-4xl text-center text-white pt-20">
          Instant Loans, from $100 to $5000
        </div>
        <div className="text-2xl text-center font-semibold text-white pt-5">
          All Credit Types Welcome
        </div>
        <div className="iframe-container">
          <iframe title="Frame Content" src={frameSrc} className=""></iframe>
          {/* <div className='text-2xl text-center font-semibold text-white pt-5'>
            Representative Example: $1,000 loan over a 12-month term would have a total cost, including interest, a total payback amount of $1,134.72. APR 29.82%. Rates between 4.95% APR and 34.95% APR. Loan term lengths from 61 days to 72 months for qualified consumers.
          </div> */}
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
