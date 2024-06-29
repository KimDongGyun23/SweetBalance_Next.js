export interface MainPostListType {
  id: number;
  leftSideTitle: string;
  rightSideTitle: string;
}

export interface MainListType {
  subject: string;
  postList: MainPostListType[];
}
