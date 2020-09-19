import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('');
  //console.log(input);

  //When the app loads, we need listen to the database and fetch new todos as they are removed or added
  useEffect(() => {
    // This code fires when App.js
    //Show from database  (READ)
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot((snapshot) => {
      setTodos(snapshot.docs.map(doc => doc.data().todo));


      //To delete, we must add ID
      setTodos(snapshot.docs.map(doc => ({
        id: doc.id,
        todo: doc.data().todo
      })));
    })
  }, [])

  const addTodo = (event) => {
    //This action will hit when we click the button.
    //console.log("Hello I am button");
    event.preventDefault();

    // Write to database (CREATE)
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })

    setTodos([...todos, input]);
    setInput('');

  }


  return (
    <div className="App">
      <h1> Let's Build Todo</h1>
      <form>
        <FormControl>
          <InputLabel>Enter your Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)} />
        </FormControl>
        <Button disabled={!input} type="submit" color="default" onClick={addTodo}>Add Todo</Button>
      </form>


      <ul>
        {todos.map(todo => (
          <Todo todo={todo} />
        ))}

      </ul>
    </div>
  );
}

export default App;
