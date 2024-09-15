import React from 'react';
import Category_1 from '../assets/Category_1.jpg';
import Category_2 from '../assets/Category_2.jpg';
import Category_3 from '../assets/Category_3.jpg';
import Category_4 from '../assets/Category_4.jpg';
import Category_5 from '../assets/Category_5.jpg';

const Categories = () => {
    return (
        <div className="overflow-x-auto py-14 pl-24 sm:px-6 lg:px-8">
            <div className="flex justify-center space-x-4 md:space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center cursor-pointer ">
                    <img src={Category_1} alt="Bestsellers" className="mx-auto rounded-full border-2 border-green-600 h-40 w-40 p-2 hover:scale-110 ease-in duration-300" />
                    <p className="mt-2">Bestsellers</p>
                </div>
                <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center cursor-pointer ">
                    <img src={Category_2} alt="Easy to Care" className="mx-auto rounded-full border-2 border-green-600 h-40 w-40 p-2 hover:scale-110 ease-in duration-300" />
                    <p className="mt-2">Easy to Care</p>
                </div>
                <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center cursor-pointer ">
                    <img src={Category_5} alt="Bestsellers" className="mx-auto rounded-full border-2 border-green-600 h-40 w-40 p-2 hover:scale-110 ease-in duration-300" />
                    <p className="mt-2">Indoor Plants</p>
                </div>
                <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center cursor-pointer ">
                    <img src={Category_3} alt="Bestsellers" className="mx-auto rounded-full border-2 border-green-600 h-40 w-40 p-2 hover:scale-110 ease-in duration-300" />
                    <p className="mt-2">Ceramic Pots</p>
                </div>
                <div className="flex-shrink-0 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 text-center cursor-pointer ">
                    <img src={Category_4} alt="Easy to Care" className="mx-auto rounded-full border-2 border-green-600 h-40 w-40 p-2 hover:scale-110 ease-in duration-300" />
                    <p className="mt-2">Equipments</p>
                </div>
              
            </div>
        </div>
    )
}

export default Categories