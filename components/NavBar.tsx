import Image from 'next/image';

const NavBar = () => {
  return (
    <div className="leading-[10rem] padding-x">
      <Image src="/logo.png" alt="logo" width={200} height={200} />
    </div>
  );
};

export default NavBar;
