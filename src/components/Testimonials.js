import React, { useState } from 'react';
import PaxelGirl from "../assets/pexelsGirl.jpg";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Sushmita Goyal",
      image: PaxelGirl, // Replace with image URL
      review: "After receiving this plant (Monstera Deliciosa), the plant was mature, tall as promised with a healthy growth... it was well hydrated and full of node... The packaging was great... Thank you @ugaoo for this delightful Monstera.. I'll be happy to buy it again.",
    },
    {
      name: "John Doe",
      image: "/path-to-image2.jpg",
      review: "Great experience with the plant. Healthy and well packaged!",
    },
    // Add more reviews here
  ];

  const handlePrev = () => {
    setCurrentIndex(currentIndex === 0 ? reviews.length - 1 : currentIndex - 1);
  };

  const handleNext = () => {
    setCurrentIndex(currentIndex === reviews.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="flex flex-col items-center py-10 bg-emerald-100">
      <h2 className="text-2xl font-bold mb-6">From Happy Plant Parents</h2>
      <div className="flex items-center space-x-4">
        <button onClick={handlePrev} className="text-xl">&#8592;</button>
        <div className="rounded-full overflow-hidden w-16 h-16">
          <img src={reviews[currentIndex].image} alt={reviews[currentIndex].name} className="w-full h-full object-cover" />
        </div>
        <button onClick={handleNext} className="text-xl">&#8594;</button>
      </div>
      <div className="mt-6 max-w-xl text-center">
        <p className="italic text-gray-700">
          {reviews[currentIndex].review}
        </p>
        <div className="mt-4">
          <span className="font-bold">— {reviews[currentIndex].name}</span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
