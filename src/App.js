import logo from './logo.svg';
import './App.css';
import Chessboard from "chessboardjsx";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Chessboard position="start" />
        <p>
          Chess... <code>code tag</code> 
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Other React Link
        </a>
      </header>
    </div>
  );
}

export default App;
