'use client';
import CommentInput from '@/components/CommentInput';
import ErrorText from '@/components/ErrorText';
import Loading from '@/components/Loading';
import { useRecommentList } from '@/app/comment/[commentId]/recomment/[recommentId]/hooks/useRecommentList';
import { useParams } from 'next/navigation';
import BubbleFooter from '@/components/BubbleFooter';
import Bubble from '@/components/Bubble';
import postRecomment from './apis/postRecomment';

const Recomment = () => {
  const { commentId, recommentId }: { commentId: string; recommentId: string } = useParams();
  const { commentList, isLoading, error } = useRecommentList(
    commentId as string,
    recommentId as string
  );
  const onClick = async (comment: string) =>
    await postRecomment(
      { content: comment, sideInfo: 0, parentCommentId: +recommentId },
      commentId
    );

  if (isLoading) return <Loading />;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (commentList === null) return null;

  return (
    <>
      <div
        className={`flexColumn flex-1 gap-[10px] overflow-x-hidden overflow-y-scroll p-3 scrollbar-hide`}
      >
        {commentList.map(({ sideInfo, id, content }) => (
          <div className={`flex ${sideInfo === 0 ? 'justify-start' : 'justify-end'}`} key={id}>
            <div className="flexColumn gap-1">
              <Bubble content={content} sideInfo={sideInfo} />
              <BubbleFooter commentId={commentId} recommentId={id} sideInfo={sideInfo} />
            </div>
          </div>
        ))}
      </div>
      <CommentInput onClick={onClick} />
    </>
  );
};

export default Recomment;
