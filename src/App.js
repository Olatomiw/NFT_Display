import "./App.css"
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Trustee from "./Component/Trustee";
import Collection from "./Component/Collection";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Trustee/>
      <Collection />
    </div>
  );
}

export default App;
