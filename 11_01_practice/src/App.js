import { useState } from 'react';

import Header from './components/Header/Header';
import InfoBox from './components/InfoBox/InfoBox';
import AddFood from './components/AddFood/AddFood';

const DUMMY_MENU = [
  { id: 1, title: 'SuShi', description: 'some text', amount: 15.55 },
  { id: 2, title: 'B', description: 'some text b', amount: 13.33 },
  { id: 3, title: 'C', description: 'some text c', amount: 11.11 },
  { id: 4, title: 'D', description: 'some text d', amount: 8.88 },
];

const DUMMY_CART = { count: 0, items: [] };

function App() {
  const [menu, setMenu] = useState(DUMMY_MENU);
  const [cart, setCart] = useState(DUMMY_CART);

  return (
    <div>
      <Header />
      <InfoBox />
      <AddFood menu={menu} />
    </div>
  );
}

export default App;
