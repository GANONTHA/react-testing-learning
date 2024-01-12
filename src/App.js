import "./App.css";
import Count from "./TESTINGWITHJEST/Count";
import Todos from "./TESTINGWITHJEST/Todos";
import { OrderedList } from "./TESTINGWITHENZYME/OrderedList";

function App() {
  const animals = ["duck", "wales", "sheeps"];
  return (
    <div className="App">
      <Count />
      <Todos />
      <OrderedList options={animals} />
    </div>
  );
}

export default App;
