import PhoneBookContainer from './Counter/Counter'
import React from 'react'

class App extends React.Component{
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }
  
  currentName = (event) =>{
    const {name,value} = event.currentTarget
    this.setState({[name]:[value]})
  }

  addNewName = (event) =>{
    event.preventDefault()
    
    if(this.state.contacts.find(option => option.name === `${this.state.name}`)){
      return alert(`${this.state.name} is already in contact`)
    }

    const id = this.state.contacts.length+1
    const {name,number} = this.state

    const updateSlice = [{id: `id-${id}`, name:`${name}`, number:`${number}`}]
    const currentState = this.state.contacts

    this.setState({contacts:[...currentState,...updateSlice]})
    console.log(this.state.contacts)
  }

  deleteName = (event) =>{
    const currentState = this.state.contacts
    const newState = currentState.filter(option => option.id !== `${event.currentTarget.id}`)
    this.setState({contacts:[...newState]})
  }

  filterName = (event) =>{
    this.setState({filter:`${event.currentTarget.value}`})
  }
  
  render(){
    
    const {filter} = this.state
    const currentState = this.state.contacts
    const newState = currentState.filter(option => option.name.toLowerCase().includes(`${filter.toLowerCase()}`))
    
    return (
    <PhoneBookContainer
    currentName={this.currentName}
    addNewName={this.addNewName}
    events={newState}
    deleteName={this.deleteName}
    filterName={this.filterName}
    />
    
  );
}
};

export default App