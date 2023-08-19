import Link from 'next/link';
import { OptionListProps } from '@/types';

const OptionList = ({
  options,
  linkClasses,
  titleClasses,
}: OptionListProps) => {
  return (
    <div className="text-center">
      {options.map((option) => {
        const { title, url } = option;

        return (
          <Link key={title} href={url} className={`${linkClasses}`}>
            <span className={`${titleClasses}`}>{title}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default OptionList;
