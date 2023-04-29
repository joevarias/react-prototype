import logo from './logo.svg';
import './App.css';
import { Header1, Header2 } from './components/Header'


const url="/tickets"


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Header1/>
        <Header2/>
          <b>TEST2</b>
        <a
          className="App-link"
          // href="https://reactjs.org"
          href={url}
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
