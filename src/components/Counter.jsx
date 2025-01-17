// src/components/Counter.jsx
import { useState } from 'react';

function Counter() {
  // Step 2: Initialize state with 0
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* Step 3: Display the current count */}
      <p>Current Count: {count}</p>

      {/* Step 4: Buttons to control the count */}
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
