import React from 'react';
import { BeatLoader } from 'react-spinners';

const Loading = () => {
  return (
    <div className="mx-auto my-4">
      <BeatLoader size={15} color="#2987F5" />
    </div>
  );
};

export default Loading;
