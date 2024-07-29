import { FaChevronDown } from 'react-icons/fa';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import {
  usePopupState,
  bindFocus,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';
import { Link } from 'react-router-dom';
import { ReactNode } from 'react';

interface MenuDropdownProps {
  data: {
    icon: ReactNode;
    title: string;
    link: string;
    menu: boolean;
  };
  location: {
    pathname: string;
  };
}

const list = ['usb', 'sd', 'dsads'];

export default function ShopDropdown({ data, location }: MenuDropdownProps) {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'shopMenu',
  });

  return (
    <li
      className={`${location.pathname == data.link && 'bg-third text-accent'} flex h-10 items-center rounded-[2.5rem] text-base transition-all delay-75 hover:bg-third`}
    >
      <Link
        to={data.link}
        {...bindHover(popupState)}
        {...bindFocus(popupState)}
        className="flex items-center px-5 transition-all delay-75 hover:text-accent"
      >
        <span>{data.title}</span>
        <FaChevronDown className="text-[0.5rem]" />
      </Link>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        className="mt-5 w-full"
      >
        <ul className="my-2 flex w-full flex-col space-y-2">
          {list.map((item, index) => {
            return (
              <li key={index} onClick={popupState.close}>
                <span className="cursor-pointer px-8 text-sm font-light text-secondary hover:text-accent">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>
      </HoverMenu>
    </li>
  );
}
