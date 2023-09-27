import React, { useState } from 'react';

function App() {
  const [button, setButton] = useState({
    color: 'red',
    text: 'Change to blue',
    enabled: true,
  });

  return (
    <div>
      <input
        type="button"
        value={button.text}
        style={{ backgroundColor: button.color }}
        onClick={() => {
          setButton({
            ...button,
            color: button.color === 'red' ? 'blue' : 'red',
            text: button.text === 'Change to blue' ? 'Change to red' : 'Change to blue',
          });
        }}
      />
      <input
        type="checkbox"
        name="checkbox"
        id="checkbox" 
        onChange={() => {
          setButton({
            ...button,
            color: button.color === 'gray' ? button.text === 'Change to blue' ? 'red' : 'blue' : 'gray',
            enabled: button.enabled ? false : true,
          });
        }}
      />
    </div>
  );
}

export default App;
