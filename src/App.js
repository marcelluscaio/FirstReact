import logo from './logo.svg';
import './App.css';
import Banner from './componentes/banner/banner'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Banner />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Caio's first React project
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
