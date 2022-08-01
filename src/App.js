import {useState} from "react";

function App() {

  const [active, setActive] = useState(1);

  return (
    <div className="App">
      <div className="container" >
        <div 
          className={active === 1 ? "active panel explore" : "panel explore" }
          onClick={()=> {setActive(1)}}
        >
          <h3>Explore The world</h3>
        </div>
        <div 
          className={active === 2 ? "active panel forest" : "panel forest" }
          onClick={()=> {setActive(2)}}
        >
          <h3>Wild Forest</h3>
        </div>
        <div 
          className={active === 3 ? "active panel beach" : "panel beach" }
          onClick={()=> {setActive(3)}}
        >
          <h3>Sunny Beach</h3>
        </div>
        <div 
          className={active === 4 ? "active panel city" : "panel city" }
          onClick={()=> {setActive(4)}}
        >
          <h3>City in Winter</h3>
        </div>
        <div 
          className={active === 5 ? "active panel mountains" : "panel mountains" } 
          onClick={()=> {setActive(5)}}
        >
          <h3>Mountains - Clouds</h3>
        </div>
      </div>
    </div>
  );
}

export default App;
