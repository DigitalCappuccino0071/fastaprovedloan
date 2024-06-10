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
                      title="Privacy and Security: Our Commitment to You
                "
                      des="At our company, safeguarding your information is our top priority. We go above and beyond to ensure the utmost protection of your data. By utilizing a robust 128-bit SSL encryption, we create a secure environment where any information you share remains confidential. Rest assured that we treat your personal data with the same level of care as we would our own. We understand the importance of maintaining the privacy and security of your information, which is why we employ stringent security protocols to safeguard both your data and ours."
                    />
                    <FaqOne
                      title="Acknowledgment of Importance
                "
                      des="We would like to draw your attention to the following information regarding General Loans, APR, Loan Resumptions, and Loan Payment Terms. We kindly request that you read this section carefully."
                    />
                    <FaqOne
                      title="Fee Disclosure
                "
                      des="While our services are always provided free of charge, it is important to note that the lender may impose fees and/or interest as part of the loan agreement. Upon approval, your lender is obligated to fully disclose all terms and conditions. It is your responsibility to thoroughly review these terms before signing your loan agreement."
                    />
                    <FaqOne
                      title="Late Payment Policy
                "
                      des="Late payment penalties vary among lenders. Some may be forgiving if you directly contact them, while others may automatically add a fee as stipulated in their agreement. For further information, please contact your lender directly if you encounter any issues repaying your loan."
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
