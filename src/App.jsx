import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        Add count
      </button>
    </>
  );
};

export default App;
