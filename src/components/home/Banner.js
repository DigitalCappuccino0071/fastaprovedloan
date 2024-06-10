'use client'
import Script from 'next/script'
import React from 'react'

const Banner = () => {
    const containerRef = useRef(null)

    function moveScript() {
        containerRef.current.appendChild(this)
    }
    return (
        <div className=''>
            <div
                className="relative md:h-[100vh] h-[100vh] bg-no-repeat bg-cover bg-right "
                style={{
                    backgroundImage: `url("/images/banner.jpg")`,
                }}
            >
                <div className='flex flex-col items-center backdrop-blur-sm bg-black/40 h-full'>
                    <h1 className=' font-bold text-5xl text-white mt-24 w-[60%] text-center leading-[55px]'> Instant Loans, from $100 to $5000 </h1>
                    <div>
                        {/* <Script src="https://cdn101-om162-client.phonexa.com/form/run.php?p=E84F20F55F744C9C93B0597EEB4F68C7" /> */}
                        {/* <Script
        id="script"
        type="text/javascript"
        src="#url"
        async
        onLoad={moveScript}
      /> */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Banner