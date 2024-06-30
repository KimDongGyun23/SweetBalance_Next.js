import RECOMMENT_API from '@/apis/recommentApi';
import { CommentType } from '@/types/commentType';
import { useEffect, useState } from 'react';

export const useRecommentList = (commnetId: string | number, recommentId: string | number) => {
  const [commentList, setCommentList] = useState<CommentType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await RECOMMENT_API.GET.getRecomment(commnetId, recommentId);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setCommentList(data.commentList);
      } catch (error: any) {
        setError(error.message);
        console.error('Error fetching data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [commnetId, recommentId]);

  return { commentList, isLoading, error };
};
