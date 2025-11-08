import './App.css';
import Todo from './components/Todo';
import TodoTitle from './components/TodoTitle';
import PopUp from './components/PopUp';

import Counter from './components/Counter';

import { useState, useEffect } from 'react';

function App() {

  const [popupOpen, setPopupOpen] = useState(false);

  function handleClick() {
    setPopupOpen(true);
    console.log('parent notified');
  }

  function cancelPopup() {
    setPopupOpen(false);
    console.log('cancel popup');
  }

  useEffect(() => {
    console.log('run when the page mounts')
  }, []);

  useEffect(() => {
    console.log('run when page mounts and popupopen changes')
  }, [popupOpen]);

  useEffect(() => {
    console.log('runs each time anything is rendered on the page')
  })

  
  return (
    <>

    <Counter />
    
      <TodoTitle />
      <input type="text" onChange={(event) => {console.log(event.target.value);}} />
    <button onClick={() => {setPopupOpen(true)}}>Add to do</button>
      <Todo 
      task='Learn React'
      handleClick = {handleClick}
      />
      <Todo 
      task='Finish ASAP Frontend'
      />
      <Todo 
      task='Land a Junior Job'
      />
      <Todo 
      task='Earn $100+'
      />
      
      {popupOpen && <PopUp 
      question ='Are you sure?'
      cancelPopup = {cancelPopup}
      />}

    </>
  )
}

export default App;
