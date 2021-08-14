import { Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div>
      <Route path='/' exact>
        <Redirect to='/quotes' />
      </Route>
      <Route path='/quotes' exact>
        <h1>Quotes</h1>
      </Route>
      <Route path='/quotes/:quoteId'>
        <h1>Quote</h1>
      </Route>
      <Route path='/new-quote'>
        <h1>New Quote</h1>
      </Route>
    </div>
  );
}

export default App;
