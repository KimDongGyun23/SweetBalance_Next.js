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

export interface SendingCommentType {
  content: string;
  sideInfo: number;
  parentCommentId: string | number;
}

export interface CommentInputType {
  onClick: (comment: string) => Promise<void>;
}
