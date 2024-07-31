import { Button } from '@mui/material';
import SliderComponent from '../../../components/Slider/Slider';
import ProductSlider from '../../../components/Slider/ProductSlider';
import product1 from '../../../assets/images/Product/product-image-1-346x310.jpg';
import product2 from '../../../assets/images/Product/product-image-2-346x310.jpg';
import product3 from '../../../assets/images/Product/product-image-3-346x310.jpg';
import product4 from '../../../assets/images/Product/product-image-4-346x310.jpg';
import product5 from '../../../assets/images/Product/product-image-5-346x310.jpg';
import banner1 from '../../../assets/images/Home/banner-box2.jpg';
import banner2 from '../../../assets/images/Home/bacola-banner-01.jpg';
import banner3 from '../../../assets/images/Home/bacola-banner-02.jpg';
import { LuMoveRight } from 'react-icons/lu';
import ProductCardv2 from '../../../components/ProductCard/ProductCardv2';

const productData = [
  {
    cover: product1,
    title: 'Nestle Original Coffee-Mate Coffee Creamer',
    price: '11.99',
  },
  {
    cover: product2,
    title: 'Field Roast Chao Cheese Creamy Original',
    price: '19.50',
  },
  {
    cover: product3,
    title: 'Blue Diamond Almonds Lightly Salted',
    price: '10.58',
  },
  {
    cover: product4,
    title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
    price: '3.29',
  },
  {
    cover: product5,
    title: 'All Natural Italian-Style Chicken Meatballs',
    price: '7.25',
  },
];

const newProduct = [
  {
    cover: product1,
    title: 'Nestle Original Coffee-Mate Coffee Creamer',
    price: '11.99',
  },
  {
    cover: product2,
    title: 'Field Roast Chao Cheese Creamy Original',
    price: '19.50',
  },
  {
    cover: product3,
    title: 'Blue Diamond Almonds Lightly Salted',
    price: '10.58',
  },
  {
    cover: product4,
    title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
    price: '3.29',
  },
  {
    cover: product5,
    title: 'All Natural Italian-Style Chicken Meatballs',
    price: '7.25',
  },
  {
    cover: product3,
    title: 'Blue Diamond Almonds Lightly Salted',
    price: '10.58',
  },
  {
    cover: product4,
    title: 'Angie’s Boomchickapop Sweet & Salty Kettle Corn',
    price: '3.29',
  },
  {
    cover: product5,
    title: 'All Natural Italian-Style Chicken Meatballs',
    price: '7.25',
  },
];

export default function HomeRight() {
  return (
    <div className="ml-8">
      <div>
        <SliderComponent />
      </div>
      <div className="my-8">
        <div className="flex items-center">
          <div className="mb-5 mr-auto font-dosis">
            <div className="text-xl uppercase">Best seller</div>
            <div className="text-sm text-gray-400">
              Do not miss the current offers until the end of March.
            </div>
          </div>
          <div className="ml-auto">
            <Button className="flex items-center justify-center rounded-[1.85rem] border border-solid border-gray-300 px-5 font-inter text-xs capitalize text-gray-500">
              View all
              <LuMoveRight className="ml-3" />
            </Button>
          </div>
        </div>
        <div>
          <ProductSlider productData={productData} />
        </div>
      </div>
      <div className="relative my-10 flex h-32 items-center overflow-hidden rounded-md bg-[#F8EFEA]">
        <img src={banner1} className="ml-auto rounded-md" />
        <div className="absolute left-14 font-inter">
          <div className="text-[0.875rem] font-normal text-gray-400">
            Always Taking Care
          </div>
          <div className="text-lg font-semibold tracking-[-0.8px] text-gray-500">
            In store or online your health & safety is our top priority.
          </div>
        </div>
        <a href="#" className="absolute left-0 top-0 z-50 h-full w-full"></a>
      </div>
      <div className="my-8">
        <div className="flex items-center">
          <div className="mb-5 mr-auto font-dosis">
            <div className="text-xl uppercase">New products</div>
            <div className="text-sm text-gray-400">
              New products with updated stocks.
            </div>
          </div>
          <div className="ml-auto">
            <Button className="flex items-center justify-center rounded-[1.85rem] border border-solid border-gray-300 px-5 font-inter text-xs capitalize text-gray-500">
              View all
              <LuMoveRight className="ml-3" />
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-4">
          {newProduct.map((item, index) => {
            return <ProductCardv2 key={index} productData={item} />;
          })}
        </div>
      </div>
      <div className="flex space-x-10">
        <div className="relative flex items-center">
          <img src={banner2} className="rounded-md" />
          <div className="absolute left-8 font-inter">
            <div className="mb-3 font-dosis text-[0.875rem] font-semibold uppercase text-accent">
              Weekend discount 40%
            </div>
            <div className="mb-2 text-2xl font-semibold tracking-[-0.8px] text-secondary">
              Legumes & Cereals
            </div>
            <div className="mb-4 text-xs text-gray-400">
              Feed your family the best
            </div>
            <Button className="rounded-[2.5rem] bg-gray-400 px-4 py-2 text-xs capitalize text-primary">
              Shop now
            </Button>
          </div>
          <a href="#" className="absolute left-0 top-0 z-50 h-full w-full"></a>
        </div>
        <div className="relative flex items-center">
          <img src={banner3} className="rounded-md" />
          <div className="absolute left-8 font-inter">
            <div className="mb-3 font-dosis text-[0.875rem] font-semibold uppercase text-accent">
              Weekend discount 40%
            </div>
            <div className="mb-2 text-2xl font-semibold tracking-[-0.8px] text-secondary">
              Dairy & Eggs
            </div>
            <div className="mb-4 text-xs text-gray-400">
              A different kind of grocery store
            </div>
            <Button className="rounded-[2.5rem] bg-gray-400 px-4 py-2 text-xs capitalize text-primary">
              Shop now
            </Button>
          </div>
          <a href="#" className="absolute left-0 top-0 z-50 h-full w-full"></a>
        </div>
      </div>
    </div>
  );
}
