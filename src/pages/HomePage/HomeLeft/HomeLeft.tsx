import leftBanner1 from '../../../assets/images/Home/Left/banner-box.jpg';
import leftBanner2 from '../../../assets/images/Home/Left/bacola-banner-04.jpg';
import { Button } from '@mui/material';
import trending1 from '../../../assets/images/Home/Left/product-image-7.jpg';
import trending2 from '../../../assets/images/Home/Left/product-image-4.jpg';
import trending3 from '../../../assets/images/Home/Left/product-image-48.jpg';
import trending4 from '../../../assets/images/Home/Left/product-image-5.jpg';
import trending5 from '../../../assets/images/Home/Left/product-image-46.jpg';
import ProductCardv3 from '../../../components/ProductCard/ProductCardv3';
import { CiDeliveryTruck } from 'react-icons/ci';

const trendingProduct = [
  {
    cover: trending1,
    title: 'USDA Choice Angus Beef Stew Meat',
    price: '79.99',
    discount: '49.99',
  },
  {
    cover: trending2,
    title: 'Warrior Blend Organic',
    price: '39.00',
    discount: '29.00',
  },
  {
    cover: trending3,
    title: 'Encore Seafoods Stuffed Alaskan Salmon',
    price: '32.49',
    discount: '27.49',
  },
  {
    cover: trending4,
    title: 'Vital Farms Pasture-Raised Egg Bites Bacon & Cheddar',
    price: '29.00',
    discount: '25.00',
  },
  {
    cover: trending5,
    title: 'Field Roast Chao Cheese Creamy Original',
    price: '24.00',
    discount: '19.50',
  },
];

export default function HomeLeft() {
  return (
    <div className="flex flex-col space-y-12">
      <div className="h-[75vh]"></div>
      <div className="relative">
        <div className="absolute left-10 top-10">
          <div className="mb-3 font-inter">
            <div className="mb-2 text-[0.875rem] text-primary">
              Bacola Natural Foods
            </div>
            <div className="whitespace-[-0.8px] mb-1 text-[1.375rem] font-extralight">
              Special Organic
            </div>
            <div className="text-2xl font-semibold">Roats Burger</div>
          </div>
          <div className="flex flex-col">
            <span className="mb-1 font-inter text-xs font-normal text-secondary">
              only-from
            </span>
            <span className="font-dosis text-3xl font-semibold text-red-600">
              $14.99
            </span>
          </div>
        </div>
        <img src={leftBanner1} className="w-full rounded-lg" />
        <a href="#" className="absolute left-0 top-0 z-50 h-full w-full"></a>
      </div>
      <div className="relative">
        <div className="absolute left-10 top-10">
          <div className="mb-3 font-inter">
            <div className="mb-2 text-[0.875rem] text-gray-400">
              Best bakery products
            </div>
            <div className="whitespace-[-0.8px] mb-1 text-[1.375rem] font-extralight">
              Freshest Products
            </div>
            <div className="text-2xl font-semibold">Roats Burger</div>
          </div>
          <div className="mb-4 flex flex-col">
            <span className="mb-1 font-inter text-xs font-normal text-secondary">
              only-from
            </span>
            <span className="font-dosis text-3xl font-semibold text-red-600">
              $24.99
            </span>
          </div>
          <Button className="rounded-[2.5rem] bg-header px-3 py-1 font-inter text-[0.875rem] capitalize text-primary">
            Shop now
          </Button>
        </div>
        <img src={leftBanner2} className="w-full rounded-lg" />
        <a href="#" className="absolute left-0 top-0 z-50 h-full w-full"></a>
      </div>
      <div className="w-full rounded-md border border-gray-300">
        <div className="flex border-b border-gray-300 p-5 last:border-none">
          <div className="mr-4 flex w-1/4 items-center justify-center">
            <CiDeliveryTruck className="text-4xl" />
          </div>
          <div className="text-xs">
            Order now so you dont miss the opportunities.
          </div>
        </div>
        {/* <div className="flex border-b border-gray-300 p-5 last:border-none">
          <div className="mr-4 flex w-1/4 items-center justify-center">
            <CiDeliveryTruck className="text-4xl" />
          </div>
          <div className="text-xs">
            Order now so you dont miss the opportunities.
          </div>
        </div>
        <div className="flex border-b border-gray-300 p-5 last:border-none">
          <div className="mr-4 flex w-1/4 items-center justify-center">
            <CiDeliveryTruck className="text-4xl" />
          </div>
          <div className="text-xs">
            Order now so you dont miss the opportunities.
          </div>
        </div> */}
      </div>
      <div>
        <div className="font-dosis uppercase">Trending products</div>
        <div className="mt-8 rounded-md border border-gray-300">
          {trendingProduct &&
            trendingProduct.map((item, index) => {
              return <ProductCardv3 key={index} productData={item} />;
            })}
        </div>
      </div>
    </div>
  );
}
