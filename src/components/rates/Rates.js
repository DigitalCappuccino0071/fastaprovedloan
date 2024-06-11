import React from 'react'

const Rates = () => {
    return (

        <div className='container py-16 '>
            <div className='md:grid grid-cols-2 items-center justify-center gap-10'>
                <div>
                    <img src='/images/rates.jpg' className='' alt='' />
                </div>
                <div className='md:pt-0 pt-5'>
                    <p>
                        The rates and fees associated with your loan will be determined by the lender. Please note that our company does not act as a direct lender and does not offer lending services to individuals. Instead, we utilize the information you provide to swiftly and conveniently connect you with a suitable lender.
                    </p>
                    <p className='pt-2'>
                        The rates offered are determined by your creditworthiness and are subject to change without prior notice. Your specific rate and monthly payment may differ. To apply, you must be 18 years of age or older.
                    </p>
                    <p className='pt-2'>
                        We connects consumers with reputable lenders who offer valuable loan information and support. Our service is completely free of charge. After submitting your application, if it gets approved, you will receive a loan offer agreement. The lenders will provide full disclosure of all loan details, such as APR, loan finance charges, and other terms you need to agree to. We strongly advise all users to thoroughly read and review the loan terms of any offer they receive. If you have any further inquiries regarding APR or loan-related services, please don't hesitate to contact us for additional assistance.
                    </p>


                </div>
            </div>
            <div className='pt-16'>

                <h2 className='text-3xl py-5 font-bold'>
                    Complete Transparency in Loan Terms
                </h2>
                <p>
                    In accordance with the Truth in Lending Act, it is mandatory for lenders to provide complete transparency regarding all loan fees and interest rates. Your lender is required to disclose all fees and rates before you accept the loan. Once you agree to the loan terms, most lenders will guide you to an e-signature page to finalize the loan process. We strongly advise you to thoroughly read and understand your loan agreement before accepting and signing it.
                </p>
                <p className='pt-2'>
                    Please note that we are not a lender and cannot provide the exact APR (Annual Percentage Rate). Rates featured on LoansMee.net, which is advertised via Google ads, range from a minimum of 3.95% APR to a maximum of 35.99% APR (calculated in compliance with the Truth in Lending Act, TILA), with repayment terms spanning from 3 months to 36 months. The specific APR will be determined by your lender, and you will be informed of the final rate before accepting the loan terms. It's important to recognize that annual percentage rates may vary based on two factors: 1) the information provided in your initial loan request, and 2) the information supplied to you by your lender.
                </p>

                <h2 className='text-3xl py-5 font-bold'>
                    Late Payment Policy
                </h2>
                <p>
                    Different lenders may have varying policies regarding late payments. It is essential to thoroughly review the late payment policy outlined in your loan agreement before finalizing the agreement. All lenders are obligated to comply with relevant laws, rules, and regulations pertaining to late payment fees.
                </p>

                <h2 className='text-3xl py-5 font-bold'>
                    Non-payment Policy
                </h2>
                <p>
                    In the event that you are unable to repay your loan, there may be additional fees or charges applicable. Our company endeavors to collaborate with reputable lenders who are committed to employing legal, fair, and reasonable methods when pursuing the collection of overdue accounts.
                </p>

                <h2 className='text-3xl py-5 font-bold'>
                    Loan Renewal Policy
                </h2>
                <p>
                    The policies regarding loan renewal are primarily regulated by state law. In states where renewals are permitted, it's important to note that additional interest and late fees can significantly increase the overall loan amount. Therefore, it is advisable to avoid renewals whenever possible. Before signing the loan agreement, carefully review the terms provided by the lender to assess the available renewal options.
                </p>
                <p className='pt-2'>
                    * Please be aware that this information is provided for informational purposes only and should not be considered as legal advice. Additionally, it may not always be accurate or up to date. If you have specific inquiries about applicable laws or regulations, it is recommended to directly contact your lender or consult with a legal adviser. It is worth noting that certain states may not have specific lending provisions related to personal loans.
                </p>

                <h2 className='text-3xl py-5 font-bold'>
                    Representative Example
                </h2>
                <p>
                    For instance, if you borrowed $2,000 for a period of 12 months, and the loan included a 3% arrangement fee ($60), your monthly repayments would amount to $189.12. The total amount to be repaid, including the 3% fee deducted from the loan, would be $2,269.44, resulting in a total cost of $329.44. The representative APR for this example is 29.82%.
                </p>
                <p className='pt-2'>
                    Alternatively, if you borrowed $5,000 for a duration of 48 months, with an 8% arrangement fee ($400), your monthly repayments would be $131.67. The total repayment amount, including the 8% fee deducted from the loan, would be $6,320.12, resulting in a total cost of $1,720.12. The representative APR for this example is 18.23%.
                </p>





            </div>
        </div>
    )
}

export default Rates