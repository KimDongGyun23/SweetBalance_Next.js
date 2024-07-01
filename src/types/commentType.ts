export interface CommentPageType {
  params: { commentId: string };
}

export interface RecommentPageType {
  params: { commentId: string; recommentId: string };
}
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
  comment: CommentType;
}

export interface SendingCommentType {
  content: string;
  sideInfo: number;
  parentCommentId: number;
}

export interface CommentInputType {
  commentId: string;
  recommentId?: string;
}
