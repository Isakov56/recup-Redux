import logo from './logo.svg';
import './App.css';
import Control from './components/Control'
import Counter from './components/Counter'
import Micky from './components/Micky'
import Changer from './components/Changer'

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <Control></Control>
      <Changer></Changer>
      <Micky></Micky>
    </div>
  );
}

export default App;
