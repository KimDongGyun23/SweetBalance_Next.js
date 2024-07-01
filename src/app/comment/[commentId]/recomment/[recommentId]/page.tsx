import CommentInput from '@/components/CommentInput';
import BubbleFooter from '@/components/BubbleFooter';
import Bubble from '@/components/Bubble';
import { CommentType, RecommentPageType } from '@/types/commentType';
import { getRecommentList } from '@/services/comment/getRecommentList';

const Recomment = async ({ params }: RecommentPageType) => {
  const { commentId, recommentId } = params;
  const commentList = await getRecommentList(commentId, recommentId);

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
              <BubbleFooter comment={comment} commentId={commentId} />
            </div>
          </div>
        ))}
      </div>
      <CommentInput commentId={commentId} recommentId={recommentId} />
    </>
  );
};

export default Recomment;
