import { Component } from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { people: [] };
  }

  fetchHandler = async () => {
    const res = await axios.get(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
    );

    const people = [];
    for (let key in res.data) {
      const person = res.data[key];
      console.log(person);
      people.push(person);
    }

    this.setState({ people });
  };

  addHandler = async () => {
    const person = { id: Math.random(), name: 'Jack' };

    const newPeople = [...this.state.people];
    newPeople.push(person);
    this.setState({ people: newPeople });

    const res = await axios.post(
      'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
      person
    );
    console.log(res);
  };

  componentDidMount() {
    this.fetchHandler();
  }

  render() {
    console.log(this.state);
    return (
      <div className='App'>
        <div>
          <button onClick={this.addHandler}>Add Jack</button>
        </div>
        <div>
          {this.state.people.map((person) => (
            <div className='person' key={person.id}>
              {person.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
