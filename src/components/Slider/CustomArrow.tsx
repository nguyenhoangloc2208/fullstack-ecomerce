import React from 'react';
import { CustomArrowProps } from 'react-slick';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

const PrevArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      className="absolute left-0 top-1/2 z-10 flex h-8 w-8 -translate-x-[50%] -translate-y-[50%] items-center justify-center rounded-full border border-gray-300 bg-primary text-secondary"
      onClick={onClick}
    >
      <FaChevronLeft className="text-base" />
    </button>
  );
};

const NextArrow = (props: CustomArrowProps) => {
  const { onClick } = props;
  return (
    <button
      className="absolute right-0 top-1/2 z-10 flex h-8 w-8 -translate-y-[50%] translate-x-[50%] items-center justify-center rounded-full border border-gray-300 bg-primary text-secondary"
      onClick={onClick}
    >
      <FaChevronRight className="text-base" />
    </button>
  );
};

export { PrevArrow, NextArrow };
