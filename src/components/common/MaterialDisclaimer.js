
import Link from 'next/link'
import React from 'react'

const MaterialDisclaimer = () => {
    return (

        <div
            className=" bg-cover   "
            style={{
                backgroundImage: "url('/images/backgroundimg.jpg')",
            }}
        >
            <div className='bg-[#14375eda] container py-16'>
                <h2 className='text-3xl py-5 font-bold text-white'>
                    Material Disclosure
                </h2>
                <p className='text-white'>
                    <span className='font-bold'> APR and Loan Information Disclosure:</span>  Certain states impose regulations on the Annual Percentage Rate (APR) that lenders can impose on borrowers. APRs and repayment terms provided by lenders may vary depending on specific criteria. Representative APRs range from 4.95% to 34.95%.  These APRs are subject to potential changes.
                </p>
                <p className='text-white pt-3'>
                    <span className='font-bold'>  Material Disclosure:</span> The operator of this website does not function as a lender, loan broker, or agent. We serve as an advertising referral platform for qualified participating lenders who could potentially offer cash advance loans ranging from $100 to $1,000, installment loans up to $5,000, and personal loans up to $35,000. The availability of these loan amounts is not guaranteed, and acceptance by an independent participating lender is not assured. This service does not constitute a solicitation or offer for loan products that are prohibited by state laws. We neither endorse nor charge for any services or products. Any compensation received is solely for advertising services rendered by participating lenders. This offer and service are void where prohibited. We are not accountable for the actions of lenders, and full loan terms, including APR, remain outside our purview. For specific details about your loan, including rates, charges, renewal options, and implications of non-payment or skipped payments, please communicate directly with your lender. Your loan registration data may be shared with one or more participating lenders. There's no obligation to use our service for contacting a lender, registering for credit, or accepting a loan. Transfer times and repayment terms vary based on the lender, and state and local laws may regulate repayment terms. Some instances may require faxing. Consult our FAQs for additional insights on matters like credit and consequences of late payments. These disclosures offer informational guidance and should not be deemed legal counsel. Usage of this service is subject to the Terms of Use and Privacy Policy of this site.
                </p>
                <p className='text-white pt-3'>
                    <span className='font-bold'> Exclusions:</span>  Certain state residents may not qualify for short-term, small-dollar loans through this service. Residents of Arkansas, New York, New Hampshire, Vermont, and West Virginia are ineligible to utilize this website or service. The list of states served by this website may change periodically without prior notice.
                </p>
                <p className='text-white pt-3'>
                    <span className='font-bold'>   Credit Implications:</span> The operator of this website does not render credit decisions. Independent participating lenders who you may connect with might conduct credit checks via credit reporting agencies or obtain consumer reports, often through alternate sources, to assess creditworthiness, standing, and capacity. By submitting your information, you consent to participating lenders verifying your details and conducting a credit check. Loans provided by independent participating lenders in our network are intended for short-term repayment and are not designed to address long-term debt or credit difficulties. Only borrow an amount that can be repaid on your upcoming pay period. It is advisable to seek professional guidance regarding your financial situation, risks, and alternatives to short-term loans. Delays in loan payments could lead to additional fees or collection activities, or both. Each lender has distinct terms and policies; review these for further insight. Nonpayment of credit could result in collection activities. Lenders have individual renewal policies that may vary. Refer to your lender's renewal policy for more details.
                </p>

                <div className='md:flexjustify-center md:space-x-5 underline items-center text-white font-bold text-xl md:pt-16  '>

                    {/* <Link href="/e-consent"> E-Consent </Link> */}
                    <br className='md:hidden block' />
                    <Link className='' href="/privacy-policy"> Privacy Policy </Link>
                    <br className='md:hidden block' />
                    <Link href="/terms-of-use"> Terms of Use </Link>
                    <br className='md:hidden block' />
                    <Link className='' href="/disclaimer"> Disclamier Policy </Link>
                    <br className='md:hidden block' />
                    {/* <Link href="/apr-rates"> APR Rates </Link> */}
                    {/* <br className='md:hidden block'/> */}
                    <Link className='' href="/contact"> Contact Us </Link>

                </div>
            </div>
        </div>

    )
}

export default MaterialDisclaimer