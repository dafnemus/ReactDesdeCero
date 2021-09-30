import LoginFormBasic from './ejercicios/BasicLogin';
import './App.css';
import Search from './ejercicios/search';

function App() {
  return (
    <div className='App'>
      <h2 className='title'>Ejercicio Maquetado: LogIn básico.</h2>
      <LoginFormBasic />
      <hr className='divider' />
      <h2 className='title'>Ejercicio: Buscador</h2>
      <Search />
    </div>
  );
}

export default App;
