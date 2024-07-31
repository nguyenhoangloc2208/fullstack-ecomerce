import { Button } from '@mui/material';
import { Product } from '../Slider/ProductSlider';
import { CiHeart } from 'react-icons/ci';
import { useState } from 'react';

interface ProductCardProps {
  productData: Product;
}

export default function ProductCard({ productData }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className="relative border-r border-r-gray-300 px-4 py-3 transition-all delay-75 ease-in-out"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute left-4 top-5 flex flex-col font-dosis text-xs font-semibold">
        <div className="mb-2">
          <span className="rounded bg-header px-3 py-1 text-primary">23%</span>
        </div>
        <div className="rounded bg-gray-500 px-3 py-1 uppercase text-primary">
          Recommended
        </div>
      </div>
      <div className="mt-2 cursor-pointer">
        <img src={productData.cover} alt={productData.title} />
      </div>
      <div className="line-clamp-2 cursor-pointer py-4 font-inter text-sm transition-all delay-75 ease-in-out hover:text-accent">
        {productData.title}
      </div>
      <div className="font-dosis text-[0.6875rem] font-semibold uppercase text-accent">
        In stock
      </div>
      <span className="block py-4 font-dosis">
        <span className="mr-2 text-sm text-gray-400 line-through">
          ${productData.price}
        </span>
        <span className="text-lg text-red-600">${productData.price}</span>
      </span>
      <Button className="delay-74 w-full rounded-[2.5rem] border border-solid border-accent text-accent transition-all ease-in-out hover:bg-header hover:text-primary">
        Add to cart
      </Button>
      <div
        className={`absolute right-4 top-5 cursor-pointer rounded-full p-1 shadow-custom transition-all delay-100 hover:bg-header hover:text-primary ${isHovered ? 'animate-fade-in-right' : 'animate-fade-out-left'} `}
      >
        <CiHeart className="text-2xl" />
      </div>
      <a href="#" className="absolute left-0 top-0 z-50 h-full w-full"></a>
    </div>
  );
}
