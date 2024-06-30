export interface BubbleType {
  sideInfo: number;
}

export interface CommentType {
  id: number;
  sideInfo: number;
  content: string;
  childCount: number;
  likeCount: number;
  parentCommentId: number;
}
