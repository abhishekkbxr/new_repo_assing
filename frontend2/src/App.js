import * as React from "react";
import "./App.css";
import Test from "./Components/Test";
import { Container } from "@mui/material";

function App() {
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <Container className="App">
      <Test day={days[0]} />
      <Test day={days[1]} />
      <Test day={days[2]} />
      <Test day={days[3]} />
      <Test day={days[4]} />
      <Test day={days[5]} />
      <Test day={days[6]} />
    </Container>
  );
}

export default App;
