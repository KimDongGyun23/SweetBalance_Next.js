export interface CommentType {
  id: number;
  sideInfo: number;
  content: string;
  childCount: number;
  likeCount: number;
  parentCommentId: number;
}

export type BubbleType = Pick<CommentType, 'content' | 'sideInfo'>;

export interface BubbleFooterType {
  commentId: string | number;
  recommentId: string | number;
  sideInfo: number;
}
