"use client";
import React from "react";
import FaqOne from "../common/FaqOne";
// import HeadingOnly from "../common/HeadingOnly";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Faq = ({bgSet}) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const textVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  const spanVariants = {
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 2,
      },
    },
  };

  return (
    <>
      <div className="py-12 lg:px-0 bg-primary">
        <div className="container">
         
          <div className="">
            <div className="">
              <div
              >
                <div className="text-3xl font-bold pb-6 text-white">
                    FAQ
                </div>
                {" "}
                <div className="space-y-8">
                  <div className="flex flex-col space-y-3">
                    <FaqOne
                      title="What is medical coding?
                "
                      des="The process of turning medical diagnoses and treatments into standardised codes for billing and record-keeping purposes is known as medical coding."
                    />
                    <FaqOne
                      title="Why is medical coding important?
                "
                      des="For healthcare professionals and insurance organisations, medical coding provides correct recordkeeping, proper reimbursement, and data analysis."
                    />
                    <FaqOne
                      title="What qualifications do I need to enrol in a medical coding course?
                "
                      des="A high school diploma or similar is usually necessary to begin a medical coding course."
                    />
                    <FaqOne
                      title="How long does it take to complete a medical coding course?
                "
                      des="Many courses can be finished in a few months to a year, though the length can vary."
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
