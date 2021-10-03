
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState } from 'react';
import Routing from './Components/Routing/Routing';

export const MyContext = React.createContext('text');

function App() {
  const [text,setText] = useState({
    text: '"Thanks for Waiting"',

  })
  return (
    <MyContext.Provider value={[text, setText]}>
      <div>
        <Routing></Routing>
      </div>
    </MyContext.Provider>
  );
}

export default App;
