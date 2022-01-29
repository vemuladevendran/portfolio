import "./App.css";
import NavBar from "./pages/navbar/navbar";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import MySkils from "./pages/my-skils/my-skils";
import About from "./pages/about/about";
import Contact from "./pages/contact/contact";

function App() {
  return (
    <div className="App h-100">
      <NavBar />
      <Home />
      <About />
      <MySkils />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
