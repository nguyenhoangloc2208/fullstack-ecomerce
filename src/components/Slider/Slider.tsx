import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../assets/images/Home/slider-1.jpg';
import Slider2 from '../../assets/images/Home/slider-2.jpg';
import Slider3 from '../../assets/images/Home/slider-3.jpg';
import CustomDots from './CustomDots';
import { Button } from '@mui/material';
import { LuMoveRight } from 'react-icons/lu';

const sliderData = [
  {
    discount: 20,
    image: Slider1,
    title: 'Specialist in the grocery store',
    price: '7.99',
  },
  {
    discount: 30,
    image: Slider2,
    title: 'Feed your family the best',
    price: '8.99',
  },
  {
    discount: 40,
    image: Slider3,
    title: 'Grocery full of inspiration',
    price: '6.99',
  },
];

const SliderComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 15000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    arrows: false,
    appendDots: (dots: string) => <CustomDots dots={dots} />,
    customPaging: () => (
      <div className="h-2 w-2 cursor-pointer rounded-full"></div>
    ),
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {sliderData &&
          sliderData.map((item, index) => {
            return (
              <div key={index} className="relative cursor-pointer">
                <div className="absolute top-[18%] ml-20 h-[370px] w-1/2">
                  <div className="mb-5 flex items-center">
                    <div className="font-dosis text-xs uppercase tracking-[1px]">
                      Exclusive offer
                    </div>
                    <div className="relative ml-5 font-dosis text-[0.875rem] text-accent before:absolute before:-bottom-1 before:-left-3 before:-right-3 before:-top-1 before:rounded-[2.5rem] before:bg-custom-gradient">
                      -{item.discount}% OFF
                    </div>
                  </div>
                  <div className="mb-8 font-inter">
                    <div className="mb-2 text-5xl font-bold leading-[1.2] tracking-[-0.7px]">
                      {item.title}
                    </div>
                    <div className="font-light">
                      Only this week. Don't miss...
                    </div>
                  </div>
                  <div className="mb-8 font-light">
                    from{' '}
                    <span className="ml-1 font-dosis text-4xl font-semibold text-red-600">
                      ${item.price}
                    </span>
                  </div>
                  <Button className="rounded-[2.5rem] bg-header px-5 py-2 font-inter capitalize text-primary">
                    Shop now <LuMoveRight className="ml-3 text-lg" />
                  </Button>
                </div>
                <img className="rounded-md" src={item.image} />
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default SliderComponent;
