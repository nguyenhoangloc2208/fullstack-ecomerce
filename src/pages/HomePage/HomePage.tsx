import HomeLeft from './HomeLeft/HomeLeft';
import HomeRight from './HomeRight/HomeRight';

export default function HomePage() {
  return (
    <div className="mt-2 flex w-full">
      <div className="w-[23.12%]">
        <HomeLeft />
      </div>
      <div className="w-[76.88%]">
        <div className="mx-5 w-full">
          <HomeRight />
        </div>
      </div>
    </div>
  );
}
