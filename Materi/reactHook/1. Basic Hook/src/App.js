import logo from './logo.svg';
import './App.css';
import HookCount from './HookCount/HookCount.js'
import HookCountTwo from './HookCount/HookCountTwo.js'
import HookCountThree from './HookCount/HookCountThree.js'
import HookCountFour from './HookCount/HookCountFour.js'
import HookCountFive from './HookCount/HookCountFive.js'
import HookMouse from './HookEffect/HookMouse.js'
import HookMouseContainer from './HookEffect/HookMouseContainer.js'
import IntervalHookCounter from './HookEffect/IntervalHookCounter.js'

function App() {
  return (
    <div className="App">
      {/* Count */}
      <HookCount/>

      <h2>React PrevState</h2>
      {/* PrevState */}
      <HookCountTwo/>

      {/* useState with object */}
      <h2>React useState with object</h2>
      <HookCountThree/>

      {/* useState with Array */}
      <h2>React useState with array</h2>
      <HookCountFour/>

      {/* useEffect and Conditionally run effects */}
      <h2>React useEffect and Conditionally run effects </h2>
      <HookCountFive/>

      {/* useEffect and Run effects only once */}
      <h2>React useEffect and Run effects only once </h2>
      <HookMouse/>

      {/* useEffect and useEffect with cleanup */}
      <h2>React useEffect and useEffect with cleanup </h2>
      <HookMouseContainer/>

      
      {/* useEffect and useEffect with cleanup */}
      <h2>React useEffect with incorrect dependency </h2>
      <IntervalHookCounter/>
    </div>
  );
}

export default App;
