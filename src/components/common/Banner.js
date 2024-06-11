import React from "react";

const Banner = ({ subHeading, image, title, }) => {

    return (
        <>
            <div className="relative">
                <div
                    className="relative md:h-[50vh] bg-no-repeat bg-top bg-cover"
                    style={{
                        backgroundImage: "url('/images/breadcrumbs.jpg')",
                    }}
                >
                    <div className="text-white flex justify-center h-full flex-col md:px-16 px-5 bg-gradient-to-r from-black/80 to-transparent">
                        <div className="max-w-5xl md:space-y-6 space-y-4 ">
                            <div className="flex space-x-2 px-1">
                                <span className="w-0.5 h-16 bg-primary"></span>
                                <h3 className="md:text-5xl text-3xl md:leading-[4rem] md:w-[60%] font-extrabold">{title}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Banner;
