"use client";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { MapPin, PhoneCall } from "lucide-react";

const Form = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [phone, setPhone] = useState("");
    const [subject, setSubject] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("data after submit:", e);
        let data = {
            name,
            email,
            phone,
            subject,
            message,
        };

        axios
            .post("/api/contact", data)
            .then((res) => console.log("res", res))
            .catch((e) => console.log("err", e));
        // fetch("/api/contact", {
        //   method: "POST",
        //   headers: {
        //     Accept: "application/json, */*",
        //     "Content-Type": "application/json",
        //   },
        //   body: JSON.stringify(data),
        // }).then((res) => {
        //   console.log("Response received:", res);
        //   console.log("data:", data);
        // });
    };
    return (
        <div className="py-20 container">
            <div className=" md:grid grid-cols-2 items-center md:px-0 md:pt-0 gap-12 ">
                <div className="flex-col space-y-16 max-w-[90%]">
                    <div className="py-6 px-8  rounded-xl bg-white items-center shadow-md flex space-x-5 ">
                        <MapPin className="bg-primary text-white rounded-full p-2 w-10 h-10" />
                        <div>
                        <p className=" font-bold text-lg pb-2">Address</p>
                        <p>276 Langley Ln , Wadsworth, OH 44281</p>
                        </div>
                       
                    </div>
                    <div className="py-8 px-8  rounded-xl bg-white shadow-md items-center flex space-x-10">
                        <PhoneCall className="bg-primary text-white rounded-full p-2 w-10 h-10" />
                        <div className="">
                            <p className=" font-bold text-lg pb-2">Phone Number</p>
                            <p>+13137243447</p>
                        </div>
                    </div>

                </div>
                <div className=" ">
                    <div className=" border pt-10 px-8 shadow-md rounded-xl bg-white">

                        {/* form start */}
                        <form className="md:pt-0 pt-7 ">
                            <div className="space-y-4  py-8 text-sm">
                                <div class="w-full">
                                    <input
                                        className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                        id="inline-full-name"
                                        name="name"
                                        onChange={(e) => setName(e.target.value)}
                                        type="text"
                                        placeholder="Full Name"
                                    />
                                </div>
                                <div class="w-full">
                                    <input
                                        className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                        id="inline-full-name"
                                        name="email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div className="flex space-x-5">
                                    <div class="w-full">
                                        <input
                                            className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                            id="inline-full-name"
                                            name="phone"
                                            onChange={(e) => setPhone(e.target.value)}
                                            type="text"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                    <div class="w-full">
                                        <input
                                            className="bg-transparent appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                            id="inline-full-name"
                                            name="subject"
                                            onChange={(e) => setSubject(e.target.value)}
                                            type="text"
                                            placeholder="Subject"
                                        />
                                    </div>
                                </div>

                                <textarea
                                    type="text"
                                    rows={5}
                                    name="message"
                                    onChange={(e) => setMessage(e.target.value)}
                                    id="mesage"
                                    placeholder="Write your message"
                                    className="bg-priamry appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
                                />
                                <div className="mx-auto text-center">
                                    {/* <GradientBtn title="Send Message"/> */}
                                    <button
                                        type="submit"
                                        className="bg-primary px-10 py-2 text-white"
                                        onClick={(e) => {
                                            handleSubmit(e);
                                        }}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                        {/* form end */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Form;
