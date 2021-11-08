import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPeople, addPerson } from './store/people-actions';
import './App.css';

class App extends Component {
  fetchHandler = () => {
    this.props.fetchPeople();
  };

  addHandler = () => {
    const person = { id: Math.random(), name: 'Jack' };

    this.props.addPerson(person);
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
    fetchPeople: (people) => {
      dispatch(fetchPeople(people));
    },
    addPerson: (person) => {
      dispatch(addPerson(person));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
