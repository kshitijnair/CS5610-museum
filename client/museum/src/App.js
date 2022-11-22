import logo from './logo.svg';
import './App.css';

const getContent = () => {
  fetch('http://localhost:8000/home' + word)
    .then(result => result.json())
    .then(body => setAssociations(body));
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={getAssociations}>Find Associations</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
