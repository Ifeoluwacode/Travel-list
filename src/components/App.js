import { useState } from "react";
import Logo from "./Logo";
import Form  from "./Form";
import PackingList from "./PackingList";
import  Stats  from "./Stats";
import Item from "./Item";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Pen", quantity: 5, packed: true },
];
export default function App(){
  const [items, setItems] = useState([])

  function handleAdd (item){
    setItems((items)=>[...items, item])
  }
  function handleDelete(id){
    setItems((items)=> items.filter((item) => item.id !== id))
  }
  function handlePack(id){
    setItems((items) => items.map(item => item.id === id ? {...item, packed: !item.packed}: item))
  }
  function clearList(){
    const confirmed = window.confirm("Are you sure you want to Clear all your items")
    if (confirmed)
    setItems((items) => [])
  }
  return(
    <div className="app">
      <Logo/>
      <Form addItems = {handleAdd}/>
      <PackingList items ={items} deleteItems ={handleDelete} addPack = {handlePack} addClear = {clearList} />
      <Stats items ={items}/>
    </div>
  )
}


