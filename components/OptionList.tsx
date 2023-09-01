import Link from 'next/link';
import Image from 'next/image';
import { OptionListProps } from '@/types';

const OptionList = ({
  options,
  linkClasses,
  titleClasses,
  selectedOpt,
  setSelectedOpt = (selectedOpt: string) => {},
}: OptionListProps) => {
  // create a new option component
  //
  return (
    <div className="text-center whitespace-nowrap">
      {options.map((option) => {
        const { title, url } = option;
        const createHoverEffect = (): string => {
          if (selectedOpt !== title) {
            return 'aniUnderline';
          } else if (selectedOpt === title) {
            return 'border-b-2 border-[#9f8600] pb-[2px]';
          }

          return 'hover:text-[#9f8600]';
        };

        return (
          <Link
            key={title}
            href={url}
            className={`${linkClasses}`}
            onClick={(e): void => {
              e.preventDefault();
              setSelectedOpt(title);
            }}
          >
            <span className={`${titleClasses} ${createHoverEffect()}`}>
              {title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default OptionList;
