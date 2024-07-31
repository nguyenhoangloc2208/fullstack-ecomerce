import { Button } from '@mui/material';
import { Product } from '../Slider/ProductSlider';
import { CiHeart } from 'react-icons/ci';
import { useState } from 'react';

interface ProductCardProps {
  productData: Product;
}

export default function ProductCardv2({ productData }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="h-full">
      <div
        className={`relative border border-gray-300 bg-primary px-4 py-3 transition-all ${isHovered ? 'z-30 h-[115%] scale-[1.02] transform rounded-md transition-transform delay-75' : ''} `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="absolute left-4 top-5 flex cursor-pointer flex-col font-dosis text-xs font-semibold">
          <div className="mb-2">
            <span className="rounded bg-header px-3 py-1 text-primary">
              23%
            </span>
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
        <Button
          className={`${isHovered ? 'animate-fade-in-bottom' : 'animate-fade-out-top'} absolute left-5 right-5 rounded-[2.5rem] border border-solid border-accent bg-header text-primary transition-all ease-in-out`}
        >
          Add to cart
        </Button>
        <div
          className={`absolute right-4 top-5 cursor-pointer rounded-full p-1 shadow-custom transition-all delay-75 hover:bg-header hover:text-primary ${isHovered ? 'animate-fade-in-right' : 'animate-fade-out-left'} `}
        >
          <CiHeart className="text-2xl" />
        </div>
      </div>
    </div>
  );
}
