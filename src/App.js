import './App.css';

function App() {
  return (
    <div className="App">
      {this.state.dados.map(dado =>(
        dado
      ))}
    </div>
  );
}

export default App;
