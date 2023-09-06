import { useState } from 'react';
import './App.css';

import Logo from './components/Logo';
import Form from './components/Form';
import PackingList from './components/PackingList'; 
import Stats from './components/Stats';

const initialItem = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Tickets", quantity: 1, packed: false }
]

function App() {
  const [items, setItems] = useState(initialItem);

  function handleAddItems(item) {
    setItems((items) => [...items, item])
  }

  const handleDelete = (id) => {
    console.log(id, 'id');
    setItems((items => items.filter((item) => item.id !== id)));
  }

  const handleToggleItem = (id) => {
    console.log(id);
    setItems((items) => items.map((item) => item.id === id ? { ...item, packed: !item.packed } : item));
  }

  const handleClear = () => {
     console.log("clear");
     const confirmed = window.confirm("Are you sure you want to delete all items?");
     if(confirmed)  setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList items={items} onDeleteItem={handleDelete} onToggleItem={handleToggleItem} onClear={handleClear}/>
      <Stats items={items} />
    </div>
  );
}


export default App;
