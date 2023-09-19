import React, { useState } from "react";

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(false);

  return (
    <div>
      <button disabled={buttonDisabled}>
        Boton
      </button>
      <input type='checkbox' onClick={() => setButtonDisabled(!buttonDisabled)}/>
    </div>
  );
}

export default App;
