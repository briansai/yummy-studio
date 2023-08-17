export interface NavOption {
  title: string;
  url: string;
}

export interface NavListProps {
  options: NavOption[];
  classes: string;
}
