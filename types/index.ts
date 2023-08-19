export interface Option {
  title: string;
  url: string;
}

export interface OptionListProps {
  options: Option[];
  linkClasses?: string;
  titleClasses?: string;
}
