import { useState } from 'react';
import './App.css';

function App() {
  const [value, setValue] = useState("")

  function getValue(event) {
    // setValue(`${<h1>${event.target.value}</h1>`)
  }


  return (
    <div className="App">
      {/* <h{value}>Hello</h{value}> */}
      <div><h1>{value}</h1></div>
      <div><h2>{value}</h2></div>
      <div><h3>{value}</h3></div>
      <input type="text" onChange={getValue}></input>
    </div>
  );
}

export default App;
