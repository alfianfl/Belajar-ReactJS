
import './App.css';
import React from 'react'
import ComponentC from './components/ComponentC'

export const UserContext = React.createContext();
function App() {

  return (
    <div className="App">
      <UserContext.Provider value={'Alfian'}>
        <ComponentC/>
      </UserContext.Provider>
      
    </div>
  );
}

export default App;
