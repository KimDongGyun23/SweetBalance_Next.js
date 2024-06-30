import COMMENT_API from '@/apis/commentApi';
import { CommentType } from '@/types/commentType';
import { useEffect, useState } from 'react';

export const useCommentList = (id: string | number) => {
  const [commentList, setCommentList] = useState<CommentType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await COMMENT_API.GET.getComment(id);
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
  }, [id]);

  return { commentList, isLoading, error };
};
