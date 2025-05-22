import React from "react";
import { stops } from "./data";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Bus Route: Vadakke Stand to Kuravapady</h1>
      <ol>
        {stops.map((stop) => (
          <li key={stop.order}>
            {stop.name} {stop.notes && `- ${stop.notes}`}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default App;
