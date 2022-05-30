import React, { useState, Component } from 'react';
import ReactDOM from 'react-dom';
import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import { connect } from 'react-redux'


function addPerson(person) {
    return {
        type: 'ADD_PERSON',
        data: person
    }
}


function AddPersonForm(props) {
    const [person, setPerson] = useState('');
  
    function handleChange(e) {
      setPerson(e.target.value);
    }
      
    function handleSubmit(e) {
      if(person !== '') {
        props.addPerson(person);
        setPerson('');
      }
      e.preventDefault();
    }
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" 
          placeholder="Add new contact" 
          onChange={handleChange} 
          value={person} />
        <button type="submit">Add</button>
      </form>
    );
  }
  
  const mapDipatchToProps = {
    addPerson
  }
  
connect(null, mapDipatchToProps)(AddPersonForm)

function PeopleList(props) {
  const arr = props.contacts;
  const listItems = arr.map((val, index) =>
    <li key={index}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function mapStateToProps(state) {
  console.log("HUI")
    return {
      contacts: state.contacts
    }
}

connect(mapStateToProps)(PeopleList)

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"] 
  };

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state,
        contacts: [...state.contacts, action.data]}
    default:
      return state;
  }
}

export const store = configureStore({reducer});

  

export default class ContactList extends Component {
    render() {
        return (
          <Provider store={store}>
              <AddPersonForm />
              <PeopleList />
          </Provider>
          
            

            
        )
  }
  }