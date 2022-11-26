import { useState } from 'react';
import './App.css';

let text = "";
function App() {
  const [value, setValue] = useState("")

  function getValue(event) {
    text = event.target.value;
  }
  function becomeh1() { setValue(text) }
  function becomeh2() { setValue(text) }
  function becomeh3() { setValue(text) }

  return (
    <div className="App">
      <div><h1>{value}</h1></div>
      <div><h2>{value}</h2></div>
      <div><h3>{value}</h3></div>
      <input type="text" onChange={getValue}></input>
      <button onClick={becomeh1} >H1</button>
      <button onClick={becomeh2} >H2</button>
      <button onClick={becomeh3} >H3</button>
    </div>
  );
}

export default App;
