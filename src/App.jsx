
import { useContext } from "react";
import { themeContext } from "./Context";
import './index.css'
import Navbar from "./page/Navbar";

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
      <Navbar/>
      
    </div>
  );
}

export default App
