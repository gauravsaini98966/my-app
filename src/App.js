import logo from './logo.svg';
import './App.css';
import Couter from './Component/Counter';
import ContactForm from './Form'
import { CounterContext } from './Context/Counter';
import { useContext } from 'react';

function App() {
  const counterState=useContext(CounterContext);
  console.log(counterState)
  return (
<div>
  <h1>Count is{}</h1>
<Couter/>
<Couter/>
<Couter/>
<Couter/>
</div>

  );
}

export default App;
