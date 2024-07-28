import { Link } from 'react-router-dom';
import CountryDropdown from './CountryDropdown';
import { IoSearch } from 'react-icons/io5';
import { Button } from '@mui/material';
import { FaChevronDown, FaRegUser } from 'react-icons/fa';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { IoMenu } from 'react-icons/io5';
import { CiApple, CiBacon } from 'react-icons/ci';
import { MdChevronRight } from 'react-icons/md';
import { TbShieldCheck } from 'react-icons/tb';
import MenuDropdown from './MenuDropdown/MenuDropdown';
import { GiRawEgg } from 'react-icons/gi';
import { PiChefHatLight, PiCoffeeLight } from 'react-icons/pi';

const language = {
  title: 'English',
  list: ['English', 'German', 'Spanish'],
};

const usd = {
  title: 'USD',
  list: ['USD', 'INR', 'GBP'],
};

const allCategories = [
  {
    icon: <CiApple className="mb-1 text-2xl" />,
    title: 'Fruits & Vegetables',
    subMenu: true,
  },
  {
    icon: <CiBacon className="mb-1 text-2xl" />,
    title: 'Meats & Seafood',
    subMenu: false,
  },
  {
    icon: <GiRawEgg className="mb-1 text-2xl" />,
    title: 'Breakfast & Dairy',
    subMenu: false,
  },
];

const nav = [
  {
    icon: false,
    title: 'Home',
    subMenu: true,
  },
  {
    icon: false,
    title: 'Shop',
    subMenu: true,
  },
  {
    icon: <CiBacon className="mr-1 text-2xl" />,
    title: 'Meat & Seafood',
    subMenu: false,
  },
  {
    icon: <PiChefHatLight className="mr-1 mt-[0.1rem] text-xl" />,
    title: 'Bakery',
    subMenu: false,
  },
  {
    icon: <PiCoffeeLight className="mr-1 text-xl" />,
    title: 'Beverages',
    subMenu: false,
  },
  {
    icon: false,
    title: 'Blog',
    subMenu: false,
  },
  {
    icon: false,
    title: 'Contact',
    subMenu: false,
  },
];

export default function Header() {
  return (
    <div>
      <section className="bg-header py-2">
        <div className="container">
          <p className="my-0 text-center text-xs text-secondary">
            Due to the <b>COVID 19</b> epidemic, orders may be processed with a
            slight delay
          </p>
        </div>
      </section>
      <section>
        <div className="container flex h-8 text-sm font-light">
          <div className="mr-auto">
            <nav className="h-full">
              <ul className="flex h-full items-center space-x-2">
                <li className="text-secondary transition-all delay-75 ease-in-out hover:text-accent">
                  <Link to={'/'}>About us</Link>
                </li>
                <li className="text-secondary transition-all delay-75 ease-in-out hover:text-accent">
                  <Link to={'/'}>My account</Link>
                </li>
                <li className="text-secondary transition-all delay-75 ease-in-out hover:text-accent">
                  <Link to={'/'}>Wish list</Link>
                </li>
                <li className="text-secondary transition-all delay-75 ease-in-out hover:text-accent">
                  <Link to={'/'}>Order Tracking</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="ml-auto flex h-full items-center space-x-5 text-sm font-light">
            <div className="flex items-center space-x-2">
              <TbShieldCheck className="text-xl" />
              <span>100% Secure delivery without contacting the courier</span>
            </div>
            <div>
              <span>Need help? Call Us: </span>
              <a className="text-accent" href="tel:0332649498">
                +84 332 649 498
              </a>
            </div>
            <div className="flex space-x-4">
              <MenuDropdown data={language} />
              <MenuDropdown data={usd} />
            </div>
          </div>
        </div>
      </section>
      <header className="h-auto w-full py-5">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="flex items-center justify-start sm:w-[22%]">
              <Link to={'/'}>
                <div className="w-56 text-3xl">Ecommerce zzzz</div>
              </Link>
            </div>
            <div className="flex items-center sm:w-[78%]">
              <CountryDropdown />
              {/* Search */}
              <div className="relative mx-4 h-full w-[60%] rounded-md border border-gray-200 bg-gray-100">
                <input
                  type="text"
                  placeholder="Search for products..."
                  className="h-full w-full bg-transparent px-6 text-sm text-secondary outline-none"
                />
                <Button className="absolute right-2 top-1 h-10 w-10 min-w-10 rounded-[50%]">
                  <IoSearch className="h-5 w-5 text-accent" />
                </Button>
              </div>
              {/* Search end */}
              <div className="ml-auto flex items-center">
                <Button className="mr-3 flex h-10 w-10 min-w-10 items-center justify-center rounded-[50%] border border-solid border-accent">
                  <FaRegUser className="text-lg text-accent" />
                </Button>
                <div className="ml-auto flex items-center justify-center">
                  <span>$3.29</span>
                  <div className="relative ml-2">
                    <Button className="flex h-10 w-10 min-w-10 items-center justify-center rounded-[50%] border border-solid border-gray-300 bg-gray-100">
                      <HiOutlineShoppingCart className="text-lg text-accent" />
                    </Button>
                    <span className="absolute right-[-4px] top-[-6px] flex h-5 w-5 items-center justify-center rounded-[50%] bg-secondary text-xs text-secondary">
                      1
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="w-full border border-b-gray-300 pb-5">
        <div className="container flex">
          <Button className="relative mr-auto mt-2 flex items-center justify-center rounded-[3.125rem] bg-header px-4 py-3 text-primary">
            <IoMenu className="text-xl" />
            <span className="pl-2 pr-5">All categories</span>
            <FaChevronDown className="text-xs" />
            <div className="font-dosis absolute -bottom-1 ml-0 flex h-[1.125rem] -translate-x-3 items-center rounded-2xl border border-primary bg-gray-400 px-2 text-center text-[0.6rem] font-semibold">
              TOTAL 88 PRODUCTS
            </div>
            <div className="absolute left-0 top-[142%] min-w-[270px] border border-gray-300">
              <ul className="mt-3">
                {allCategories.map((item, index) => {
                  return (
                    <li key={index} className="h-12">
                      <Button className="relative flex w-full items-center justify-start px-4 text-sm font-normal capitalize text-gray-500 hover:bg-white hover:text-accent">
                        {item.icon}
                        <span className="ml-4 text-sm">{item.title}</span>
                        {item.subMenu && (
                          <MdChevronRight className="absolute right-5 text-xl" />
                        )}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Button>
          <nav className="ml-auto">
            <ul className="font-dosis flex h-full items-end uppercase">
              {nav.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="hover:bg-third flex h-10 items-center rounded-[2.5rem] text-base transition-all delay-75"
                  >
                    <Link
                      to={'/'}
                      className="flex items-center px-5 transition-all delay-75 hover:text-accent"
                    >
                      {item.icon && item.icon}
                      {item.title}
                      {item.subMenu && (
                        <FaChevronDown className="ml-2 text-xs" />
                      )}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}
