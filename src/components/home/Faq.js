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
                     <FaqOne
                      title="Loan Repayment Details
                "
                      des="Please note that loan repayment terms differ depending on the lender. Therefore, we strongly advise you to review the loan agreement provided by your lender for specific information on repayment terms."
                    />
                     <FaqOne
                      title="Essential Customer Information
                "
                      des="Personal loans are distinct from other loan types, such as home mortgages or automobile loans. Personal loans grant you the flexibility to utilize funds for various purposes, whether it be medical expenses, home improvements, vehicle repairs, or debt consolidation. These loans are repaid over a predetermined period. Complete the form to discover the amount you can borrow from the comfort of your own home. It's a simple and convenient process!"
                    />
                     <FaqOne
                      title="Purpose of Personal Loans
                "
                      des="People acquire personal loans to assist with home repairs, unexpected expenses, holiday shopping, and more. Our reputable lenders can provide you with the cash you need. Just fill out our online form, follow the straightforward process, and if approved, receive your cash loan!"
                    />
                     <FaqOne
                      title="Understanding APR
                "
                      des="The Annual Percentage Rate (APR) represents the cost of credit expressed as a nominal yearly rate. It pertains to the timing and amount of value received by the consumer in relation to the timing and amount of payments made. We do not guarantee any specific APR, as we do not act as a lender. Generally, APR can range from 6% to 35%. Loan products typically feature a minimum repayment term of 2 months and a maximum repayment term of 84 months. Prior to accepting a loan within our network, carefully review the loan agreement for any discrepancies in APR and repayment terms from those listed on our site."
                    />
                     <FaqOne
                      title="Collection Practices
                "
                      des="We are not involved in the debt collection process. The lender, as part of the lending agreement, will disclose their specific debt collection practices. For any collection-related inquiries, please contact the lender directly, as we only collaborate with reputable lenders who adhere to fair collection practices."
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
