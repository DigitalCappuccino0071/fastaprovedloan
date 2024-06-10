import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {

    return (
        <div className=" bg-white pt-5 md:px-0 px-5">
            <div className="container ">
                <div className=" grid md:grid-cols-2  gap-6 justify-between pb-6">
                    <div className="space-y-4">
                        <Link href="/">
                            <div>
                                <Image
                                    src="/images/logo-dark.png"
                                    width="180"
                                    height="160"
                                />
                            </div>
                        </Link>
                    </div>
                    <div className="text-end py-5 text-black text-base md:px-0 px-5">
                        <p>
                            {" "}
                            © Copyright ©2024
                            . All Rights Reserved Copyright
                        </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;
