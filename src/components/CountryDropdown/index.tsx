import Button from '@mui/material/Button';
import { FaAngleDown } from 'react-icons/fa';

export default function CountryDropdown() {
  return (
    <>
      <Button className="h-auto w-40 min-w-36 border border-solid border-gray-200">
        <div className="flex flex-col items-start capitalize">
          <span className="text-xs text-secondary">Your Location</span>
          <span className="text-sm font-bold text-accent">All</span>
        </div>
        <span className="ml-auto">
          <FaAngleDown className="text-accent opacity-70" />
        </span>
      </Button>
    </>
  );
}
