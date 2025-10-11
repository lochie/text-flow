import Home from "./components/homepage";
import { Testbench } from "./components/testbench";

function App() {
  return (
    <div>
      <Home />
      {import.meta.env.DEV && <Testbench />}
    </div>
  );
}

export default App;
