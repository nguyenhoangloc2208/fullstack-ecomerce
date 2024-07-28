import { FaChevronDown } from 'react-icons/fa';
import HoverMenu from 'material-ui-popup-state/HoverMenu';
import {
  usePopupState,
  bindFocus,
  bindHover,
  bindMenu,
} from 'material-ui-popup-state/hooks';

interface MenuDropdownProps {
  data: { title: string; list: string[] };
}

export default function MenuDropdown({ data }: MenuDropdownProps) {
  const popupState = usePopupState({
    variant: 'popover',
    popupId: 'demoMenu',
  });

  return (
    <div>
      <span
        {...bindHover(popupState)}
        {...bindFocus(popupState)}
        className="flex cursor-pointer items-center space-x-2 hover:text-accent"
      >
        <span>{data.title}</span>
        <FaChevronDown className="text-[0.5rem]" />
      </span>
      <HoverMenu
        {...bindMenu(popupState)}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        className="-translate-x-[2%]"
      >
        <ul className="m-w-auto my-2 flex flex-col space-y-2">
          {data.list.map((item, index) => {
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
    </div>
  );
}
