import { useState } from "react";
import Form from "./Components/Form";
import Logo from "./Components/Logo";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";

function App() {
  const [items, setItems] = useState([]);
  const handleAddItems = (item)=>{
    // setItems(prevItem => prevItem.push(item))
    setItems((prevItem) => [...prevItem, item])   //This is a better practice
  }

  return (
    <div className="app">
      <Logo/>
      <Form handleAddItems={handleAddItems}/>
      <PackingList items={items}/>
      <Stats/>
    </div>
  );
}

export default App;
