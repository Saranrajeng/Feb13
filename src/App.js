import Navbar from "./navbar.js";
import Image from "./image";
import Content from "./content.js";
import Footer from "./footer.js";
import './App.css';

function App() {
  return (
    <div className="App">
               <Navbar/>
            <Image/>
            <Content/>
            <Footer/>
           </div>
  );
}

export default App;
