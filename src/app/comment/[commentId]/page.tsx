import CommentInput from '@/components/CommentInput';
import Bubble from '@/components/Bubble';
import BubbleFooter from '@/components/BubbleFooter';
import { CommentPageType, CommentType } from '@/types/commentType';
import { getCommentList } from './apis/getCommentList';

const Comment = async ({ params }: CommentPageType) => {
  const commentId = params.commentId;
  const commentList = await getCommentList(commentId);

  return (
    <>
      <div
        className={`flexColumn flex-1 gap-[10px] overflow-x-hidden overflow-y-scroll p-3 scrollbar-hide`}
      >
        {commentList.map((comment: CommentType) => (
          <div
            className={`flex ${comment.sideInfo === 0 ? 'justify-start' : 'justify-end'}`}
            key={comment.id}
          >
            <div className="flexColumn gap-1">
              <Bubble content={comment.content} sideInfo={comment.sideInfo} />
              <BubbleFooter commentId={commentId} comment={comment} />
            </div>
          </div>
        ))}
      </div>
      <CommentInput commentId={commentId} />
    </>
  );
};

export default Comment;
