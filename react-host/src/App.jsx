import React, { useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import CounterWrapper from "remote/CounterWrapper"
import "./index.scss";

const App = () => {
  const divRef = useRef(null);
  
  useEffect(() => {
    // レンダリング後に実行
    CounterWrapper(divRef.current); // div domを渡す
  }, []);

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <div>Name: react-host</div>
      <div ref={ divRef }></div>
    </div>
  );
}
ReactDOM.render(<App />, document.getElementById("app"));
