import React from 'react';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <h2>Loading...</h2>
      <div className="loading-spinner"></div>
    </div>
  );
};

export default Loading;