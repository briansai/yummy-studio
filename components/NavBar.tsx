'use client';

import Image from 'next/image';
import { OptionList } from '.';
import { navBarOptions, screenWidth } from '@/constants';
import { useScreenDimensions } from 'use-screen-dimensions';
import { useState } from 'react';

const NavBar = () => {
  const { width } = useScreenDimensions();
  const [selectedOpt, setSelectedOpt] = useState<string>('Home');

  return (
    <div
      className={
        'leading-[10rem] padding-x w-screen border-b-2 border-gray-200 flex-row flex-between md:justify-center'
      }
    >
      <Image
        src="/logo.png"
        alt="logo"
        width={200}
        height={200}
        className="object-contain"
      />
      {width > screenWidth.medium && (
        <OptionList
          options={navBarOptions}
          linkClasses={'px-6'}
          selectedOpt={selectedOpt}
          setSelectedOpt={setSelectedOpt}
        />
      )}
    </div>
  );
};

export default NavBar;
