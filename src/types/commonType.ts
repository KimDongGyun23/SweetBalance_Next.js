export interface ChildrenProps {
  children: React.ReactNode;
}

export interface SubHeaderProps {
  isGame?: boolean;
  icon?: boolean;
}

export interface ButtonProps {
  $width: string;
  disabled?: boolean;
  [key: string]: any;
  children: React.ReactNode;
}

export interface CircleButtonProps {
  url: string;
  children: React.ReactNode;
}

export interface FetchResponse {
  postList: any[];
  lastCursor: number;
}
