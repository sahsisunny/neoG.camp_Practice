import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([])

  function showTitles() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((json) => setData(json))
  }
  useEffect(() => showTitles())
  return (
    <div className="App">
      <header className="App-header">
        {
          data.map((items, index) => { return (<span key={index}>{items.title}</span>) })
        }
      </header>
    </div>
  );
}

export default App;
