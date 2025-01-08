import { useState } from "react";
import { inventoryItems } from "./array";

export default function App() {
  
  const [cart, setCart] = useState([]); // State to store cart items

  // Function to add items to the cart
  function onClickCart(item, quantity) {

    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        // Update quantity if the item already exists
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + quantity }
            : cartItem
        );
      } else {
        // Add new item to the cart
        return [...prevCart, { ...item, quantity }];
      }
    });
  }






  return (
    <div>
      <Navbar cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)} />
      <InventoryList inventoryItems={inventoryItems} onClickCart={onClickCart} />
    </div>
  );
}

function Navbar({ cartCount }) {
  return (
    <nav className="navbar">
      <h1 className="logo">Puron's Shop</h1>
      <div>
        <input placeholder="Search..." className="searchBar" type="text" />
        <button className="searchButton">🔎</button>
      </div>
      <Button>🛒 {cartCount}</Button>
    </nav>
  );
}

function InventoryList({ inventoryItems, onClickCart }) {
  return (
    <ul className="list">
      {inventoryItems.map((item) => (
        <InventoryItem key={item.id} item={item} onClickCart={onClickCart} />
      ))}
    </ul>
  );
}

function InventoryItem({ item, onClickCart }) {
  const [selectedQuantity, setSelectedQuantity] = useState(1); // State for selected quantity
  const [inventory, setInventory]= useState(item.quantity);


  function handleQuantityChange(e)
  {
    const newQuantity = Number(e.target.value);
    setSelectedQuantity(newQuantity)
    setInventory(item.quantity - newQuantity);
  }


  return (
    <li className="item">
      <div className="left">
        {item.description}
        <div className="right">
          <span>${item.price}</span>
          <select
            className="quantity"
            value={selectedQuantity}
            onChange={(e) => setSelectedQuantity(Number(e.target.value))}
          >
            {Array.from({ length: inventory }, (_, i) => i + 1).map((num) => (
              <option value={num} key={num}>
                {num}
              </option>
            ))}
          </select>
        </div>
      </div>
      <Button onClick={() =>{ onClickCart(item, selectedQuantity); handleQuantityChange(selectedQuantity)}}>Add to Cart</Button>
    </li>
  );
}

function Button({ children, onClick }) {
  return (
    <button onClick={onClick} className="button">
      {children}
    </button>
  );
}
