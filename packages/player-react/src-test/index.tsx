import React, {useState} from 'react';

export function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div
      style={{padding: '1rem', border: '1px solid #ccc', borderRadius: '4px'}}
    >
      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Increment</button>
    </div>
  );
}
