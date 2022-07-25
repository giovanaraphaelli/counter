import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const handleMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <main>
      <h1>Contador</h1>
      <section>
        <button className="minus" onClick={handleMinusClick}>
          -
        </button>
        <span>{count}</span>
        <button className="plus" onClick={() => setCount(count + 1)}>
          +
        </button>
      </section>
    </main>
  );
}

export default App;
