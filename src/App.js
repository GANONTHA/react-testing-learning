import "./App.css";
import Count from "./TESTINGWITHJEST/Count";
import Todos from "./TESTINGWITHJEST/Todos";
import { OrderedList } from "./TESTINGWITHENZYME/OrderedList";
import { AuthProvider } from "./TESTINGWITHENZYME/provider/AuthContext";
import { Login } from "./TESTINGWITHENZYME/Login";

function App() {
  const animals = ["duck", "wales", "sheeps"];
  return (
    <div className="App">
      <AuthProvider>
        <Count />
        <Todos />
        <OrderedList options={animals} />

        <Login />
      </AuthProvider>
    </div>
  );
}

export default App;
