import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider1 from '../../assets/images/Home/slider-1.jpg';
import Slider2 from '../../assets/images/Home/slider-2.jpg';
import Slider3 from '../../assets/images/Home/slider-3.jpg';
import CustomDots from './CustomDots';
import { Button } from '@mui/material';

const SliderComponent: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
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
        <div className="relative cursor-pointer">
          <div className="absolute top-[18%] ml-20 h-[370px] w-1/2">
            <div className="mb-5 flex items-center">
              <div className="font-dosis text-xs uppercase tracking-[1px]">
                Exclusive offer
              </div>
              <div className="before:bg-custom-gradient relative ml-5 font-dosis text-[0.875rem] text-accent before:absolute before:-bottom-1 before:-left-3 before:-right-3 before:-top-1 before:rounded-[2.5rem]">
                -20% OFF
              </div>
            </div>
            <div className="font-inter mb-8">
              <div className="mb-2 text-5xl font-bold leading-[1.2] tracking-[-0.7px]">
                Specialist in the grocery store
              </div>
              <div className="font-light">Only this week. Don't miss...</div>
            </div>
            <div className="mb-8 font-light">
              from{' '}
              <span className="ml-1 font-dosis text-4xl font-semibold text-red-600">
                $7.99
              </span>
            </div>
            <Button className="rounded-[2.5rem] bg-header px-5 py-2 text-primary">
              Shop now
            </Button>
          </div>
          <img src={Slider1} />
        </div>
        <div>
          <img src={Slider2} />
        </div>
        <div>
          <img src={Slider3} />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
