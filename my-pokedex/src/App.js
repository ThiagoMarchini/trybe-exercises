import './App.css';
import Pokedex from './components/Pokedex';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokédex</h1>
      </header>
      <main className="content">
        <Pokedex />
      </main>
    </div>
  );
}

export default App;
