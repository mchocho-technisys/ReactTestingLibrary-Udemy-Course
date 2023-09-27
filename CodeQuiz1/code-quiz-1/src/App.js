import React, { useState } from "react";

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div>
      <button disabled={buttonDisabled}>
        Boton
      </button>
      <input id='checkbox' type='checkbox' onClick={() => setButtonDisabled(!buttonDisabled)}/>
      <label htmlFor='checkbox'>Disable button</label>
    </div>
  );
}

export default App;
