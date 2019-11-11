import React, { useState } from 'react';
import './App.css';
import List from "./Components/List";
import Data from './Data/dummy_data'


function App() {
    const [Menu] = useState(Data);
    const [selectedMenu, setSelectedMenu] = useState({});
    console.log(selectedMenu);
    const addSelectedItem = (selectedItem) => {
        setSelectedMenu({...selectedMenu, selectedItem});
        console.log(selectedMenu);
    };

  return (
    <div className="App">
        <div>
            <h1>Tree Menu</h1>
            <List
                items={Menu}
                onClick={(selectedItem) => addSelectedItem(selectedItem)}
                selectedItem={selectedMenu}
            />
        </div>
    </div>
  );
}

export default App;
