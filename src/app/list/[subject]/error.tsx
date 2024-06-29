'use client';

import ErrorText from '@/components/ErrorText';

export default function Error() {
  return (
    <div className="flexCenter">
      <ErrorText>밸런스 게임이 존재하지 않습니다.</ErrorText>
    </div>
  );
}
