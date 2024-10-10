import { useState } from "react";
import {inventoryItems} from "./array";


export default function App() {
  const [curQuantity, setQuantity] = useState(0)

  return (
   <div>
    <Navbar />
    <InventoryList  curQuantity={curQuantity}/>
   </div>
  );
}


function Navbar(){

  return (
    <div>
      <nav  className="navbar">
       <h1>Puron's Shop</h1>
      <div>
      <input  placeholder="Search..." className="searchBar" type="text" />
        <button className="searchButton">🔎</button>
     
      </div>
      <button className="button">🛒X</button>
      </nav>
    </div>
  )

}


function InventoryList({curQuantity}){
return (<div>
  <ul>
 {
  inventoryItems.map((item)=>(<InventoryItem item={item} curQuantity={curQuantity}/>))
 }
  </ul>

  <div className="Inventory">
    
  </div>
</div>);
}


function InventoryItem({item, curQuantity}){

curQuantity = item.quantity;

  return (
    <li key={item.id}>
      {item.description}
      <p> {item.brand}</p>
      <span>${item.price}</span>{"  "}

      <select>
       {Array.from({length: curQuantity}, (_,i) =>i+1).map((num)=>
        (<option value={num} key={num}>
            {num}
       </option>))}
      </select>

      <button className="button">Add to Cart</button>
      </li>
  )
}