import React from "react";

function App() {
  let time = new Date().toLocaleTimeString();
  const [state, setState] = React.useState(time);
  function updateTime() {
    let newTime = new Date().toLocaleTimeString();
    setState(newTime);
  }

  return (
    <div className="container">
      <h1>{state}</h1>
      <button onClick={updateTime}>Get Time</button>
    </div>
  );
}

export default App;
