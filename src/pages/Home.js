import React from 'react'
import CarouselComponent from '../components/CarouselComponent';
import FindGreensImage from "../assets/FindGreens.png";
import EqipmentsImage from "../assets/Equipments.png";
import Background from "../assets/BackGrounds.png";
import DecorImage from "../assets/Decor.png";
import Banner from "../assets/Banner.svg"
import InformationBar from '../components/InformationBar';
import Categories from '../components/Categories';
import SectionHeading from '../components/SectionHeading';
import About from '../components/About';
import Footer from '../components/Footer';
import Testimonials from '../components/Testimonials';

const Home = () => {

  const imageItems = [FindGreensImage, DecorImage, EqipmentsImage, FindGreensImage];

  return (
    <div className='h-custom-height'>
      <div className='relative h-2/6 sm:h-2/6 md:h-1/2 lg:h-4/5'>
        <img src={Background} alt="Backdrop" className='h-full object-cover w-full md:object-cover sm:object-contain xsm:object-contain' />
        <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-white bg-green-800 rounded-md hover:scale-105 '>Explore More</button>
      </div>
      <InformationBar color={"bg-yellow-400"} content="WhatsApp Us on +91 xxxxxxxxxx! &#128512;" showLogo textColor={"text-black"}/>
      <Categories />
      <SectionHeading heading="Poeple's Choices"/>
      <div className='px-8 py-4 rounded-lg'>
        <CarouselComponent items={imageItems} />
      </div>
      <About />
      <Testimonials />
      <InformationBar color={"bg-green-600"} content="&#x2764; Plant For The Planet &#x2764;" textColor={"text-white"}/>
      <Footer />
    </div>
  )
}

export default Home