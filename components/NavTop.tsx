import { storeOptions, userOptions } from '@/constants/navtop';
import { NavList } from '.';

const NavTop = () => {
  return (
    <div className="py-4 px-10 bg-black text-white text-sm flex-between md:flex-col lg:flex-row">
      <NavList options={storeOptions} classes={'px-2'} />
      <NavList options={userOptions} classes={'px-6 md:px-3 md:pt-2'} />
    </div>
  );
};

export default NavTop;
