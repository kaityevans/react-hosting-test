import { Button } from "./components/Button";
import { ButtonClass } from "./components/ButtonClass";
import './App.css';

function App() {
  function handleSubmit() {
    console.log("I am submitted!");
  }

  function handleClear() {
    console.log("I am cleared!");
  }

  return (
    <div className="App">
      <Button label = "Submit" handleClick={handleSubmit} />
      <Button label = "Clear" handleClick={handleClear}/>
      <Button />
      <ButtonClass label = "Submit Class" handleClick={handleSubmit} />
      <ButtonClass label = "Clear Class" handleClick={handleClear}/>
      <ButtonClass />
    </div>
  );
}

export default App;
