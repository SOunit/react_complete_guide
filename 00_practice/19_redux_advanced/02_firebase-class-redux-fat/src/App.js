import { Component } from 'react';
import { connect } from 'react-redux';
import { SET_PEOPLE } from './store/people-reducer';
import axios from 'axios';
import './App.css';

class App extends Component {
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

    this.props.setPeople(people);
  };

  addHandler = async () => {
    const person = { id: Math.random(), name: 'Jack' };

    const newPeople = [...this.props.people];
    newPeople.push(person);
    this.props.setPeople(newPeople);

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
    return (
      <div className='App'>
        <div>
          <button onClick={this.addHandler}>Add Jack</button>
        </div>
        <div>
          {this.props.people.map((person) => (
            <div className='person' key={person.id}>
              {person.name}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people.people,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setPeople: (people) => {
      dispatch({ type: SET_PEOPLE, payload: people });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
