import React, { useState } from 'react';

import Button from './components/UI/Button/Button';

import './App.css';

// point of react behind the scene
// 1. react controls virtual dom, it's cheap
// 2. reactDOM controls actual dom, it's expensive
// 3. react check changes of props, state, reducer
//    and let reactDOM know change if necessary
// 4. react function runs several times
// 5. reactDOM re-render dom partial only

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  const toggleParagraphHandler = () => {
    setShowParagraph((prevShowParagraph) => !prevShowParagraph);
  };

  return (
    <div className='app'>
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={toggleParagraphHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
