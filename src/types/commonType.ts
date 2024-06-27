export interface ChildrenProps {
  children: React.ReactNode;
}

export interface SubHeaderProps {
  icon?: boolean;
  children: React.ReactNode;
}

export interface ButtonProps {
  $width: string;
  disabled?: boolean;
  [key: string]: any;
  children: React.ReactNode;
}
