import { ExampleIntro } from "./components/example-intro";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        minHeight: "100svh",
        color: "white",
      }}
    >
      <ExampleIntro />
    </div>
  );
}

export default App;
