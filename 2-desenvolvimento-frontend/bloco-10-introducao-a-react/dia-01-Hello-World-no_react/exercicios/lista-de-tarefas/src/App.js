import './App.css';
const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Estudar Blocos 11 e 12',
'Finalizar Exercícios dos blocos 11 e 12',
'Finalizar projeto do bloco 11']
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Lista de tarefas
      </header>
      <main>
        Tarefas de hoje:
        {tarefas.map((task)=>Task(task))}
      </main>
    </div>
  );
}

export default App;
