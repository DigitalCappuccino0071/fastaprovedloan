import React from 'react'

const SectionTwo = () => {

  const data = [
    {
      id: 1,
      customeHeight: "h-72",
      icon: "/images/sec1-a.png",
      title: "Collaboration",
      des: "We've joined forces with AAPC to improve our training. Our partnership will help you to receive top-quality medical coding education and certification.",
    },
    {
      id: 2,
      customeHeight: "h-80",
      icon: "/images/sec1-b.png",
      title: "Objective",
      des: "Our goal is to provide you with exceptional medical coding education. We aim to prepare you for a successful career in the industry.",
    },
    {
      id: 3,
      customeHeight: "h-72",
      icon: "/images/sec1-c.png",
      title: "Vision",
      des: "Our vision is to train and place thousands of budding professionals. Thus, making a lasting impact in the medical coding industry.",
    },
    {
      id: 4,
      customeHeight: "h-72",
      icon: "/images/sec1-d.png",
      title: "Collaboration",
      des: "We've joined forces with AAPC to improve our training. Our partnership will help you to receive top-quality medical coding education and certification.",
    },
    {
      id: 5,
      customeHeight: "h-80",
      icon: "/images/sec1-e.png",
      title: "Objective",
      des: "Our goal is to provide you with exceptional medical coding education. We aim to prepare you for a successful career in the industry.",
    },
    {
      id: 6,
      customeHeight: "h-72",
      icon: "/images/sec1-f.png",
      title: "Vision",
      des: "Our vision is to train and place thousands of budding professionals. Thus, making a lasting impact in the medical coding industry.",
    },
  ];
  return (
    <div className='container'>
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