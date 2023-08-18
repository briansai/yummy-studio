'use client';

import { storeOptions, userOptions } from '@/constants/navtop';
import { NavList } from '.';
import { useScreenDimensions } from 'use-screen-dimensions';
import { screenWidth } from '@/constants/screenDim';

const NavTop = () => {
  const { width } = useScreenDimensions();

  return (
    <div className="py-4 px-10 bg-black text-white text-sm flex-between md:flex-col lg:flex-row">
      {width > screenWidth.medium && (
        <NavList options={storeOptions} classes={'px-2'} />
      )}
      <NavList options={userOptions} classes={'px-6 md:px-3'} />
    </div>
  );
};

export default NavTop;
