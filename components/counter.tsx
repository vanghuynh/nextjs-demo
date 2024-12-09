'use client';

import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div className='flex flex-col items-center w-[100px]'>
      <p className='text-5xl font-bold'>{count}</p>
      <button
        className='bg-blue-500 rounded text-white px-4 py-2 mt-4'
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
    </div>
  );
};

export default Counter;
