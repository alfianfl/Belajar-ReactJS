import logo from './logo.svg';
import './App.css';
import DataFetching from './DataFetching/DataFetching.js'
import DataFetchingPartTwo from './DataFetching/DataFetchingPartTwo.js'

function App() {
  return (
    <div className="App">
      <h2>Data Fecthing Part 1</h2>
      {/* Fetching data with useEffect Part 1 */}
      {/* <DataFetching/> */}

      <h2>Data Fecthing Part 2</h2>
      {/* Fetching data with useEffect Part 2 */}
      <DataFetchingPartTwo/>
    </div>
  );
}

export default App;
