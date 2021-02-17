
import './App.css';
import React from 'react'
import ComponentC from './component/ComponentC'
import ComponentF from './component/ComponentF'

export const UserContext = React.createContext()
export const ChanelContext = React.createContext()
function App() {

  return (
    <div className="App">
        <UserContext.Provider value={"Fadhil"}>
          <ChanelContext value={"labib"}>
            <ComponentF />
          </ChanelContext>
        </UserContext.Provider>
    </div>
  );
}

export default App;
