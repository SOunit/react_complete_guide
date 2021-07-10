import React, { useState } from 'react';

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

  console.log('APP RUNNING');

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <DemoOutput show={false} />
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
