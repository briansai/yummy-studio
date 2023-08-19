'use client';

import { storeOptions, userOptions } from '@/constants';
import { OptionList } from '.';

const NavTop = () => {
  return (
    <div className="py-4 px-10 bg-black text-white text-sm flex-between md:flex-col lg:flex-row">
      <OptionList options={storeOptions} linkClasses={'px-2'} />
      <OptionList options={userOptions} linkClasses={'px-6 md:px-3 md:pt-2'} />
    </div>
  );
};

export default NavTop;
