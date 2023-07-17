import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="loader text-center align-center justify-center flex">
      <h2>Loading...</h2>
      <div className="loader-inner"></div>
    </div>
  );
};

export default Loading;