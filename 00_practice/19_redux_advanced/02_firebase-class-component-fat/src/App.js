import { Component } from 'react';
import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import { setPeople } from './store/people-actions';

class App extends Component {
  fetchHandler = async () => {
    try {
      const res = await axios.get(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json'
      );

      if (res.status !== 200) {
        throw new Error('Fetch people failed.');
      }

      const people = [];
      for (let key in res.data) {
        const person = res.data[key];
        console.log(person);
        people.push(person);
      }

      this.props.setPeople(people);
    } catch (err) {
      console.log(err);
    }
  };

  addHandler = async () => {
    try {
      const person = { id: Math.random(), name: 'Jack' };
      const res = await axios.post(
        'https://fir-db-connection-sample-default-rtdb.firebaseio.com/people.json',
        person
      );

      if (res.status !== 200) {
        throw new Error('Add person failed.');
      }

      const newPeople = [...this.props.people];
      newPeople.push(person);
      this.props.setPeople(newPeople);
    } catch (err) {
      console.log(err);
    }
  };

  componentDidMount() {
    this.fetchHandler();
  }

  render() {
    console.log(this.state);
    console.log(this.props.people);
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
    setPeople: (people) => dispatch(setPeople(people)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
