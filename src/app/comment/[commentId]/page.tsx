'use client';
import CommentInput from '@/components/CommentInput';
import ErrorText from '@/components/ErrorText';
import Loading from '@/components/Loading';
import { useCommentList } from '@/app/comment/[commentId]/hooks/useCommentList';
import { useParams } from 'next/navigation';
import Bubble from '@/components/Bubble';
import BubbleFooter from '@/components/BubbleFooter';
import postComment from './apis/postComment';

const Comment = () => {
  const { commentId }: { commentId: string } = useParams();
  const { commentList, isLoading, error } = useCommentList(commentId as string);
  const onClick = async (comment: string) =>
    await postComment({ content: comment, sideInfo: 0, parentCommentId: -1 }, commentId);

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

export default Comment;
