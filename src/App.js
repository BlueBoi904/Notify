import React from 'react';
import './App.css';
import SidebarComponent from './sidebar/sidebar';
import EditorComponent from './editor/editor';

const firebase = require('firebase');

class App extends React.Component{
  constructor(){
    super();
    
    this.state = {
      selectedNoteIndex: null,
      selectedNote: null,
      notes: null
    }

  }

  render(){
    return (
      <div className='app-container'>
        <SidebarComponent></SidebarComponent>
        <EditorComponent></EditorComponent>
      </div>
    )
  }
  // Lifecycle hook that is built into react, will get called when app component is loaded successfully inside of the DOM

  componentDidMount = () => {
    firebase
    .firestore()
    .collection('notes')
    // On snapshot gets called whenever the collection is updated inside of Firebase. Function that we pass into onSnapShop will get called
    .onSnapshot(serverUpdate => {
      const notes = serverUpdate.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      console.log(notes);
      this.setState({ notes: notes});
    });
  }

}

export default App;
