import { useState } from "react";
import { inventoryItems } from "./array";


export default function App() {
  
  const [curQuantity, setQuantity] = useState(0)

  return (
    <div>
      <Navbar />
      <InventoryList curQuantity={curQuantity} />
    </div>
  );
}


function Navbar() {

  return (
    <div>
      <nav className="navbar">
        <h1 className="logo">Puron's Shop</h1>
        <div>
          <input placeholder="Search..." className="searchBar" type="text" />
          <button className="searchButton">🔎</button>

        </div>
        <Button>🛒X</Button>
      </nav>
    </div>
  )
 
}


function InventoryList({ curQuantity }) {
  return (<div>
    <ul className="list">
      {
        inventoryItems.map((item) => (<InventoryItem item={item} curQuantity={curQuantity} />))
      }
    </ul>

    <div className="Inventory">

    </div>
  </div>);
}


function InventoryItem({ item, curQuantity }) {

  curQuantity = item.quantity;

  return (
    <li className="item" key={item.id}>
      <div className="left">
        {item.description}
    
   

      <div className="right">
      <span>${item.price}</span>{"  "}
        <select className="quantity">
          {Array.from({ length: curQuantity }, (_, i) => i + 1).map((num) =>
          (<option value={num} key={num}>
            {num}
          </option>))}
        </select>
      </div>
      </div>

      <Button>Add to Cart</Button>
    </li>
  )
}



function Button({ children }) {

  return (
    <button className="button">{children}</button>
  )

}