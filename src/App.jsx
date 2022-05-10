
import { useContext } from "react";
import { themeContext } from "./Context";
import './index.css'
import Footor from "./page/Footor";
import { Home } from "./page/Home";
import Home0 from "./page/Home0";
import Home1 from "./page/Home1";
import Home2 from "./page/Home2";
import Home3 from "./page/Home3";
import {Navbar} from "./page/Navbar";

function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
      <div
      classNameName="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Home />
      <Home0 />
      <Home1 />
      <Home3 />
      <Home2 />
      <Footor/> 
     
      
    </div>
  );
}

export default App
