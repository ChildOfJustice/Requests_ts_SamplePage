import React from 'react';
import './App.css';
import {TextField} from "./TextField";
import {MyTable} from "./Components/AuthTable";

const App: React.FC = () => {
  return (
      <div>
          Created
          <TextField text={"That's how it works"} someFunction={() => alert("Whoa")}/>
          <MyTable  password={"root"} userName={"Default"}/>
      </div>
  )
};

export default App;
