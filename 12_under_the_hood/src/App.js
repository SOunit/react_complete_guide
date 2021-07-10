import React, { useState, useCallback } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';
import DemoOutput from './components/Demo/DemoOutput';

// point of react behind the scene
// 1. react controls virtual dom, compare old and new virtual dom,
//    tell differences, it's cheap
// 2. reactDOM controls actual dom, it's expensive
// 3. react check changes of props, state, context.
//    and let reactDOM know changes if necessary
// 4. react function runs several times
// 5. reactDOM re-render dom partially only

// re-execute, re-evaluate are different from re-render
// parent component [App] changes, then child component [DemoOutput] re-execute
// but, re-execute doesn't mean re-render.

function App() {
  const [showParagraph, setShowParagraph] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log('APP RUNNING');

  // setup for React.memo to work in Button.js
  // by save function, React.memo can tell no props change
  // without callback and saving function, function is always different,
  // leads to always re-evaluation of function
  const toggleParagraphHandler = useCallback(() => {
    if (allowToggle) {
      setShowParagraph((prevShowParagraph) => !prevShowParagraph);
    }
    // without dependency setup, js closure hold outside variable in memory
    // which leads to allowToggle never change
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <DemoOutput show={showParagraph} />
      <Button onClick={allowToggleHandler}>Allow Toggle!</Button>
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
