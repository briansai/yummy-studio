import Link from 'next/link';
import { OptionListProps } from '@/types';

const OptionList = ({
  options,
  linkClasses,
  titleClasses,
  selectedOpt,
  setSelectedOpt,
}: OptionListProps) => {
  return (
    <div className="text-center">
      {options.map((option) => {
        const { title, url } = option;
        const createUnderline = (): string => {
          if (selectedOpt !== title) {
            return 'aniUnderline';
          } else if (selectedOpt === title) {
            return 'border-b-2 border-[#9f8600] pb-[2px]';
          }

          return '';
        };

        return (
          <Link
            key={title}
            href={url}
            className={`${linkClasses}`}
            onClick={(e) => {
              e.preventDefault();
              setSelectedOpt(title);
            }}
          >
            <span className={`${titleClasses} ${createUnderline()}`}>
              {title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default OptionList;
