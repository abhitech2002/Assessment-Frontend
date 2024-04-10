import React from 'react';

const Spinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="animate-spin rounded-full h-20 w-20 border-b-2 border-gray-900"></div>
    </div>
  );
};

export default Spinner;
