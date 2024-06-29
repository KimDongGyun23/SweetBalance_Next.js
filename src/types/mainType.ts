export interface MainPostListType {
  id: number;
  subject: string;
  leftSideTitle: string;
  rightSideTitle: string;
}

export interface MainListType {
  subject: string;
  postList: MainPostListType[];
}
