import { useState } from "react";
import "./App.css";
import Key from "./components/Key";

function Counter() {
  // const [count, setCount] = useState(0);

  // return (
  //   <div>
  //     <h1>{count}</h1>
  //     <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
  //   </div>
  // );
}
function App() {
  // const [changeTag, setChangeTag] = useState(true);

  return (
    <div>
      

      {/* <h2>Hii</h2>
      <h3>Hello</h3> */}

      {/* {changeTag ? (
        <div>
          <p>div tag</p>
          <Counter />
        </div>
      ) : (
        <section>
          <p>section tag</p>
          <Counter />
        </section>
      )} */}
      {/* <div className={changeTag ? "active" : "inactive"}>
        <Counter/>
      </div> */}

      {/* {changeTag ? <Counter key={1} /> : <Counter key={2} />} */}

      {/* {
        changeTag ? <Counter/> : <h1>mai hu don</h1>
      } */}
      {/* <button onClick={() => setChangeTag((prev) => !prev)}>change tag</button> */}

      <Key/>
    </div>
  );
}
console.log(
  <h2 id="1">
    <p className="red">Sapna</p>
    <p>Vishal</p>
  </h2>,
);
export default App;
