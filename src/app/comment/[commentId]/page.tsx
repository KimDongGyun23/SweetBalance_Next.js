'use client';
import CommentInput from '@/components/CommentInput';
import ErrorText from '@/components/ErrorText';
import Loading from '@/components/Loading';
import Bubble from '@/app/comment/[commentId]/components/Bubble';
import BubbleFooter from '@/app/comment/[commentId]/components/BubbleFooter';
import { useCommentList } from '@/app/comment/[commentId]/hooks/useCommentList';
import { useParams } from 'next/navigation';

const Comment = () => {
  const { commentId } = useParams();
  const { commentList, isLoading, error } = useCommentList(commentId as string);

  if (isLoading) return <Loading />;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (commentList === null) return null;

  return (
    <>
      <div
        className={`flexColumn flex-1 gap-[10px] overflow-x-hidden overflow-y-scroll p-3 scrollbar-hide`}
      >
        {commentList.map((_, index) => (
          <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`} key={index}>
            <div className="flexColumn gap-1">
              <Bubble sideInfo={index % 2} />
              <BubbleFooter sideInfo={index % 2} />
            </div>
          </div>
        ))}
      </div>
      <CommentInput />
    </>
  );
};

export default Comment;
