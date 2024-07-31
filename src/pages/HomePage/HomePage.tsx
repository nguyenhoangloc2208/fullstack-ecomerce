import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';
import category1 from '../../assets/images/Home/Bottom/baverages-1.jpg';
import category2 from '../../assets/images/Home/Bottom/biscuitssnacks-1.jpg';
import category3 from '../../assets/images/Home/Bottom/breadbakery-1.jpg';
import category4 from '../../assets/images/Home/Bottom/dairy-1.jpg';
import category5 from '../../assets/images/Home/Bottom/category-image4.png';
import category6 from '../../assets/images/Home/Bottom/fruitvegetables-1.jpg';
import category7 from '../../assets/images/Home/Bottom/category-image2.png';
import category8 from '../../assets/images/Home/Bottom/household-1.jpg';
import category9 from '../../assets/images/Home/Bottom/meat-1.jpg';

const product = [
  {
    cover: category1,
    title: 'Beverages',
    items: 11,
  },
  {
    cover: category2,
    title: 'Biscuits & Snacks',
    items: 6,
  },
  {
    cover: category3,
    title: 'Breads & Bakery',
    items: 6,
  },
  {
    cover: category4,
    title: 'Breakfast & Dairy',
    items: 8,
  },
  {
    cover: category5,
    title: 'Frozen Foods',
    items: 7,
  },
  {
    cover: category6,
    title: 'Fruits & Vegetables',
    items: 12,
  },
  {
    cover: category7,
    title: 'Grocery & Staples',
    items: 7,
  },
  {
    cover: category8,
    title: 'Household Needs',
    items: 1,
  },
  {
    cover: category9,
    title: 'Meats & Seafood',
    items: 5,
  },
];

export default function HomePage() {
  return (
    <div className="mb-24">
      <div className="mt-2 flex w-full">
        <div className="w-[24%]">
          <HomeLeft />
        </div>
        <div className="w-[76%]">
          <HomeRight />
        </div>
      </div>
      <div className="mt-10 grid w-full grid-cols-5 rounded-md border-l border-t border-gray-300">
        {product.map((item, index) => {
          return (
            <div
              key={index}
              className={`${index == 4 && 'rounded-tr-md'} group flex items-center border-b border-r border-gray-300 p-5 text-secondary first:col-span-1 first:row-span-2 first:flex-col first:rounded-bl-md last:rounded-br-md`}
            >
              <div className="mb-1 mr-3 w-[40%] group-first:w-full">
                <img className="w-full" src={item.cover} />
              </div>
              <div className="flex-1 space-y-4 font-inter">
                <div className="line-clamp-2 text-sm font-semibold leading-[1.2] group-first:text-center">
                  {item.title}
                </div>
                <div className="text-xs font-light text-gray-500 group-first:text-center">
                  {item.items} Items
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
