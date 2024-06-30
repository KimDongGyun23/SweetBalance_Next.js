'use client';
import CommentInput from '@/components/CommentInput';
import ErrorText from '@/components/ErrorText';
import Loading from '@/components/Loading';
import Bubble from '@/features/comment/components/Bubble';
import BubbleFooter from '@/features/comment/components/BubbleFooter';
import { useCommentList } from '@/features/comment/hooks/useCommentList';
import { usePathname } from 'next/navigation';

const Comment = () => {
  const path = usePathname();
  const id = path.replace('/comment/', '');
  const { commentList, isLoading, error } = useCommentList(id);

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
