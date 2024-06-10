import React from 'react'

const SectionTwo = () => {

  const data = [
    {
      id: 1,
      customeHeight: "",
      icon: "/images/sec1-a.png",
      title: "Any Credit History",
      des: "Bad Credit? No problem, our lenders accept all applications.",
    },
    {
      id: 2,
      customeHeight: "",
      icon: "/images/sec1-b.png",
      title: "No Obligation",
      des: "Complete freedom to accept or decline even after an offer is presented.",
    },
    {
      id: 3,
      customeHeight: "",
      icon: "/images/sec1-c.png",
      title: "Rebuild Credit Score",
      des: "Many of the lenders in our network report on-time payments to credit agencies.",
    },
    {
      id: 4,
      customeHeight: "",
      icon: "/images/sec1-d.png",
      title: "Accept Your Funds",
      des: "Our Lenders let you know if your approved on average as little as 60sec.",
    },
    {
      id: 5,
      customeHeight: "",
      icon: "/images/sec1-e.png",
      title: "Online Process",
      des: "Our short online form can be completed in just 2 min.",
    },
    {
      id: 6,
      customeHeight: "",
      icon: "/images/sec1-f.png",
      title: "Truth in Lending",
      des: "All personal loan providers are regulated by federal and or state laws.",
    },
  ];
  return (
    <div className='container bg-primary'>
       <div className="bg-primay py-16 space-y-12">
      <div className="">
        <div className=" md:grid grid-cols-3 justify-start gap-10 md:space-y-0 space-y-8">
          {data.map((e, i) => (
            <div
              key={i}
              className={`shadow-lg px-6 py-8 rounded-xl bg-white ${e.customeHeight}`}
            >
              <div>
                <img src={e.icon} alt="" className="w-16" />
              </div>
              <div className="pt-8">
                <span className="text-secondary font-semibold text-lg text-center ">
                  {e.title}
                </span>
                {/* <hr className="h-[3px] w-[30%] bg-gradient-to-t from-primary to-secondary" /> */}
                <p className="pt-2 text-justify tracking-tighter">{e.des}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default SectionTwo