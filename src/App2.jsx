import { useState, useEffect } from 'react';

function App() {

  const [size, setSize] = useState(window.innerWidth);

  const checkSize = () => {
    setSize(window.innerWidth)
  }

  useEffect(() => { // upon mounting we don't enter cleanup
    console.log('useEffect');
    window.addEventListener('resize', checkSize); // with event listeners you must have a cleanup function with any useEffect (with or with no dependency)

    return () => { // after each re-rendering we first enter the cleanup only then the useEffect
      console.log('cleanup');
      window.removeEventListener('resize', checkSize);
    };
  }) // incase useEffect((), []) we don't need the cleanup function, yet it's preferable to have one (since if we are toggling a component with eventlistener, every toggle is a render => we are adding an eventlistener with every render)

  console.log('render');
  return (
    <>
      <h1>Hello</h1>
      <h2>{size} PX</h2>
    </>
  )
}

export default App;