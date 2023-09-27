import { useState } from 'react'
import './App.css';

export const quntityOfLetters = (word) => {
  return word.length;
};

function App() {
  const [backgroundColor, setBackgroundColor] = useState('red');
  const [text, setText] = useState('Change to blue');

  return (
    <div>
      <button 
        style={{ backgroundColor: backgroundColor}} 
        onClick={() => {
          backgroundColor === 'red' ? setBackgroundColor('blue') : setBackgroundColor('red');
          text === 'Change to blue' ? setText('Change to red') : setText('Change to blue');
        }}
      >
        {text}
      </button>
      <input type='checkbox' />
    </div>
  );
}

export default App;
