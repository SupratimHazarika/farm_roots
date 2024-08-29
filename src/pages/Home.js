import React from 'react'
import CarouselComponent from '../components/CarouselComponent';
import FindGreensImage from "../assets/FindGreens.png";
import EqipmentsImage from "../assets/Equipments.png";
import Background from "../assets/BackGrounds.png";
import DecorImage from "../assets/Decor.png";
import InformationBar from '../components/InformationBar';
import Categories from '../components/Categories';
import BestPickSection from '../components/BestPickSection';

const Home = () => {

  const imageItems = [FindGreensImage, DecorImage, EqipmentsImage, FindGreensImage];

  return (
    <div className='h-custom-height'>
      <div className='relative h-2/6 sm:h-2/6 md:h-1/2 lg:h-4/5'>
        <img src={Background} alt="Backdrop" className='h-full object-cover w-full md:object-cover sm:object-contain xsm:object-contain' />
        <button className='absolute bottom-4 left-1/2 transform -translate-x-1/2 px-3 py-1 text-white bg-green-800 rounded-md hover:scale-105 '>Explore More</button>
      </div>
      <InformationBar color={"bg-yellow-400"} content="WhatsApp Us on +91 xxxxxxxxxx! &#128512;" />
      <Categories />
      <BestPickSection />
      <div className='px-8 py-4 rounded-lg'>
        <CarouselComponent items={imageItems} />
      </div>
    </div>
  )
}

export default Home