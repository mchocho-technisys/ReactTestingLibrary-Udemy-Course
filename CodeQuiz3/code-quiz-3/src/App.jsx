import React, { useState } from "react";

function App() {
  const [buttonColor, setButtonColor] = useState('MediumVioletRed');
  const [buttonText, setButtonText] = useState('Change to MidnightBlue');
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button 
        style={{ background: buttonColor }}
        onClick={() => {
          setButtonColor(buttonColor === 'MediumVioletRed' ? 'MidnightBlue' : 'MediumVioletRed');
          setButtonText(buttonText === 'Change to MidnightBlue' ? 'Change to MediumVioletRed' : 'Change to MidnightBlue');
        }}
        disabled={disabled}
      >
        {buttonText}
      </button>
      <input type="checkbox" onChange={() => {
        setDisabled(!disabled);
        setButtonColor(disabled ? 'MediumVioletRed' : 'gray');
      }}/>
    </div>
  );
}

export default App;
