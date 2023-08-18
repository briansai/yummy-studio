'use client';
import { screenWidth } from '@/constants/screenDim';
import Image from 'next/image';
import { useScreenDimensions } from 'use-screen-dimensions';

const NavBar = () => {
  const { width } = useScreenDimensions();

  return (
    <div
      className={`leading-[10rem] padding-x ${
        width < screenWidth.medium && 'flex-center'
      }`}
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="object-contain"
      />
    </div>
  );
};

export default NavBar;
