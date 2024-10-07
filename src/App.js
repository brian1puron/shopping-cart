

const inventoryItems = 
[
  {
    id: 1,
    description: "White Pants",
    brand: "Nike",
    category: "Clothing",
    quantity: 3
  },
  {
    id: 2,
    description: "Black Shoes",
    brand: "Adidas",
    category: "Footwear",
    quantity: 2
  },
  {
    id: 3,
    description: "Red Hat",
    brand: "Nike",
    category: "Accessories",
    quantity: 5
  },
  {
    id: 4,
    description: "Blue Jacket",
    brand: "Nike",
    category: "Clothing",
    quantity: 1
  },
  {
    id: 5,
    description: "Smartphone",
    brand: "Samsung",
    category: "Electronics",
    quantity: 10
  },
  {
    id: 6,
    description: "Bluetooth Headphones",
    brand: "Sony",
    category: "Electronics",
    quantity: 15
  },
  {
    id: 7,
    description: "Leather Wallet",
    brand: "Gucci",
    category: "Accessories",
    quantity: 6
  },
  {
    id: 8,
    description: "Smartwatch",
    brand: "Samsung",
    category: "Electronics",
    quantity: 8
  },
  {
    id: 9,
    description: "Running Shoes",
    brand: "Nike",
    category: "Footwear",
    quantity: 9
  },
  {
    id: 10,
    description: "Wireless Mouse",
    brand: "Logitech",
    category: "Electronics",
    quantity: 20
  },
  {
    id: 11,
    description: "Portable Charger",
    brand: "Anker",
    category: "Electronics",
    quantity: 12
  },
  {
    id: 12,
    description: "Baseball Cap",
    brand: "New Era",
    category: "Accessories",
    quantity: 4
  },
  {
    id: 13,
    description: "Smart TV",
    brand: "Samsung",
    category: "Electronics",
    quantity: 7
  },
  {
    id: 14,
    description: "Digital Camera",
    brand: "Sony",
    category: "Electronics",
    quantity: 5
  },
  {
    id: 15,
    description: "Bluetooth Speaker",
    brand: "Bose",
    category: "Electronics",
    quantity: 9
  },
  {
    id: 16,
    description: "Winter Jacket",
    brand: "The North Face",
    category: "Clothing",
    quantity: 3
  },
  {
    id: 17,
    description: "Hiking Boots",
    brand: "Timberland",
    category: "Footwear",
    quantity: 8
  },
  {
    id: 18,
    description: "Sunglasses",
    brand: "Ray-Ban",
    category: "Accessories",
    quantity: 10
  },
  {
    id: 19,
    description: "Wireless Keyboard",
    brand: "Logitech",
    category: "Electronics",
    quantity: 7
  },
  {
    id: 20,
    description: "Noise-Cancelling Headphones",
    brand: "Sony",
    category: "Electronics",
    quantity: 10
  }
];




export default function App() {
  return (
   <div>
    <Navbar />
   </div>
  );
}


function Navbar(){

  return (
    <div className="navbar">
      <nav>
       <h1>Puron's Shop</h1>
      </nav>
      <input type="text" />
      <button>🛒X</button>
      
    </div>
  )

}


function InventoryList(){
return ;
}