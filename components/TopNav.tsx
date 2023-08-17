import { storeOptions, userOptions } from '@/constants/topnav';
import { NavList } from '.';

const TopNav = () => {
  return (
    <div className="py-4 px-10 bg-black text-white text-sm flex-between sm:flex-col md:flex-row">
      <NavList options={storeOptions} classes={'px-2'} />
      <NavList options={userOptions} classes={'px-6 sm:px-3 sm:pt-2'} />
    </div>
  );
};

export default TopNav;
