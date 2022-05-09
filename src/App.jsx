
import { useContext } from "react";
import { themeContext } from "./Context";
import './index.css'
import { Home } from "./page/Home";
import Home0 from "./page/Home0";
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
      <Home0/>
      
    </div>
  );
}

export default App
