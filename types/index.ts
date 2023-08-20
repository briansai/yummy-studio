import { Dispatch, MouseEventHandler, SetStateAction } from 'react';

export interface Option {
  title: string;
  url: string;
}

export interface OptionListProps {
  options: Option[];
  linkClasses?: string;
  titleClasses?: string;
  selectedOpt?: string;
  setSelectedOpt?: (selectedOpt: string) => void;
}
