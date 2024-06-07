import React from 'react'

const Banner = () => {
    return (
        <div className=''>
            <div
                className="relative md:h-[100vh] h-[100vh] bg-no-repeat bg-cover bg-right backdrop-blur-sm"
                style={{
                    backgroundImage: `url("/images/banner.jpg")`,
                }}
            >
                <div className='flex flex-col items-center '>
                    <h1 className=' font-bold text-5xl text-white mt-24 w-[60%] text-center leading-[55px]'> Instant Loans, from $100 to $5000 </h1>
                    <div>
                        {/* <script src="https://cdn101-om162-client.phonexa.com/form/run.php?p=E84F20F55F744C9C93B0597EEB4F68C7"></script> */}
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Banner