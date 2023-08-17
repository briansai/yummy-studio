import { storeOptions, userOptions } from '@/constants/topnav';
import { NavList } from '.';

const TopNav = () => {
  return (
    <div className="py-4 px-10 bg-black text-white text-sm flex-between">
      <NavList options={storeOptions} spacing={2} />
      <NavList options={userOptions} spacing={4} />
    </div>
  );
};

export default TopNav;
