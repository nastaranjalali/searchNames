import './App.css';
import React , {useState} from "react";
import SearchBox from "./components/SearchBox";
import NameSection from "./components/NameSection";

function App() {
    const [firstName, setFirstName] = useState("")

    return (
    <div >
      <SearchBox onChange={(event)=>setFirstName(event.target.value)
      } />
        <NameSection searchResult={firstName} />

    </div>

  );
}

export default App;
