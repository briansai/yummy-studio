import Link from 'next/link';
import { NavListProps } from '@/types';

const NavList = ({ options, spacing }: NavListProps) => {
  return (
    <div className="flex-between">
      {options.map((option) => {
        const { title, url } = option;

        return (
          <Link key={title} href={url} className={`px-${spacing}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default NavList;
