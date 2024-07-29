import React from 'react';

interface CustomDotsProps {
  dots: React.ReactNode;
}

const CustomDots: React.FC<CustomDotsProps> = ({ dots }) => {
  return (
    <div className="absolute bottom-16 left-[12%] flex -translate-x-1/2 transform space-x-2">
      <ul className="flex space-x-2">
        {React.Children.map(dots, (dot, index) => (
          <li
            key={index}
            className={`h-2 w-2 rounded-full ${
              (dot as React.ReactElement).props.className.includes(
                'slick-active',
              )
                ? 'bg-black'
                : 'bg-gray-400'
            }`}
          >
            {dot}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CustomDots;
