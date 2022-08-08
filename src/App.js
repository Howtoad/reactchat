import "./App.css";
import Home from "./Home";
import { useContext } from "react";
import MessageContext from "./context/MessageContext";
import { useState, useEffect } from "react";

function App() {
const [messageArray, setMessageArray] = useState([])

  return (
    <div className="App">
<MessageContext.Provider value={{ messageArray, setMessageArray }}>
      <Home />
      </MessageContext.Provider>
    </div>
  );
}

export default App;
