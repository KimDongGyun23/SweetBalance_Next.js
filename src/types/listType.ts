export interface PostListType {
  id: number;
  postTitle: string;
  createdDateTime: string;
  leftSideTitle: string;
  leftSideDetail: string;
  leftSideVote: number;
  rightSideTitle: string;
  rightSideDetail: string;
  rightSideVote: number;
  commentList: string[];
}

export interface ListType {
  lastCursor: number;
  postList: PostListType;
}

export interface ListPageType {
  params: {
    subject: string;
  };
}
