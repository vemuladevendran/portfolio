import "./App.css";
import NavBar from "./pages/navbar/navbar";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";

function App() {
  return (
    <div className="App h-100">
      <NavBar />
      <Home />
      <Projects />
    </div>
  );
}

export default App;
