import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const CarouselComponent = ({ items }) => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 3 // optional, default to 1.
          },
          tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
          },
          mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
          }
    };
    return (
        <Carousel responsive={responsive}>
            {items.map((item, index) => (
                <div key={index} className="flex justify-center h-full">
                    <img src={item} alt={`carousel-item-${index}`} className="object-contain" />
                </div>
            ))}
        </Carousel>
    )
}

export default CarouselComponent