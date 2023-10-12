import "./App.css"
import Hero from "./Component/Hero";
import Navbar from "./Component/Navbar";
import Trustee from "./Component/Trustee";
import Collection from "./Component/Collection";
import Creators from "./Component/Creators";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Trustee/>
      <Collection />
      <Creators />
    </div>
  );
}

export default App;
