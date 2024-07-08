import './App.css';
import Input from "./Input";
import {useState} from "react";
import History from "./History";

function App() {
    const[equationFromInput, setEquationFromInput] = useState([]);
    console.log('equationFromInput', equationFromInput)
    const updateEquation = (equation) => {
        setEquationFromInput(equationFromInput=>[...equationFromInput, equation]);

    }
  return (
      <>
          <div className={'calculator'}>
              <h1>Calculator</h1>
              <Input updateEquation={updateEquation}/>
          </div>
          <History equationFromInput={equationFromInput}/>
      </>
  );
}

export default App;
