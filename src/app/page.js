import Navbar from '@/components/common/Navbar'
import Banner from '@/components/home/Banner'
import Faq from '@/components/home/Faq'
import SectionFour from '@/components/home/SectionFour'
import SectionThree from '@/components/home/SectionThree'
import SectionTwo from '@/components/home/SectionTwo'
import React from 'react'

const Page = () => {
  return (
    <div>
      <Navbar/>
      <Banner/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <Faq/>
    </div>
  )
}

export default Page