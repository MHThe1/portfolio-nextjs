import React from 'react';

const BackgroundGrid: React.FC = () => {
  return (
    <div
      className="absolute inset-0 bg-black"
      style={{
        maskImage: 'linear-gradient(to bottom, black, transparent)',
        WebkitMaskImage: 'linear-gradient(to bottom, black, transparent)',
      }}
    >
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"
      ></div>
    </div>
  );
};

export default BackgroundGrid;
