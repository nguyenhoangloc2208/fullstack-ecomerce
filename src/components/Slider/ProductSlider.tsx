import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { NextArrow, PrevArrow } from './CustomArrow';
import ProductCard from '../ProductCard/ProductCard';

export interface Product {
  cover: string;
  title: string;
  price: string;
}

interface ProductSliderProps {
  productData: Product[];
}

export default function ProductSlider({ productData }: ProductSliderProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 15000,
    cssEase: 'ease-in-out',
    pauseOnHover: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div>
      <Slider {...settings} className="rounded-lg border border-gray-300">
        {productData &&
          productData.map((item, index) => {
            return <ProductCard key={index} productData={item} />;
          })}
      </Slider>
    </div>
  );
}
