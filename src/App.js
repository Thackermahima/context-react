import { createContext } from 'react';
import './App.css';
import CompA from './CompA';

const FirstName = createContext();
const LastName = createContext();

function App() {
  return (
    <>
    <FirstName.Provider value={"Mahima"}>
    <LastName.Provider value={"Thacker"}>
      <CompA />
    </LastName.Provider>
    </FirstName.Provider>
    </>
  );
}

export default App;
export { FirstName, LastName };