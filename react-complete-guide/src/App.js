import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'
class App extends Component {
  state = {
    persons:[{name:'john',age:'20'},
                    {name:'sai',age:'16'}]
  }


  render() {

    return (<div className = 'App'>
               <h1>This is vinay</h1>
               
               <Person name = {this.state.persons[0].name} age = '20'>Hey here is the injected content-children</Person>
               
               </div>);
    //return React.createElement('div',{className:'App'},React.createElement('h1','null','This is vinay'));
    
}
}

export default App;