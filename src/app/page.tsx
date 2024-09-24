"use client"; // Ensure this is added at the top

import Image from "next/image";
import { useState } from "react"; // Add this import

function Home() {
  // Add state for the cart with a specific item type
  const [cart, setCart] = useState<{ name: string; price: number }[]>([]);

  // Function to add item to the cart
  const addToCart = (item: { name: string; price: number }) => {
    setCart((prevCart) => [...prevCart, item]);
  };

  // Function to calculate total
  const calculateTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0);
  };

  return (
    <div className="bg-black bg-opacity-800 min-h-screen p-8">
      <div className="flex items-center space-x-4">
        <Image
          src="/images/pizza.jpg"  
          alt="dashboard pic"
          width={100} 
          height={100}
        />
        <h1 className="text-start text-4xl font-extrabold decoration-from-font outline-popover-foreground text-rose-800 font-serif">
          Pizza Mania
        </h1>
      </div>

      <div className="mt-8">
        <h2 className="text-5xl font-bold text-transparent text-rose-700">Treat Yourself</h2>

        <div className="mt-4 grid grid-cols-3 gap-4">
          <a href="#menu">
            <button className="p-4 bg-yellow-500 bg-opacity-80 text-white font-semibold rounded-tl-full ">Menu</button>
          </a>
          <a href="#deals">
            <button className="p-4 bg-red-700 bg-opacity-80 text-white font-semibold rounded-tl-full">Deals</button>
          </a>
          <a href="#contact">
            <button className="p-4 bg-blue-500 bg-opacity-80 text-white font-semibold rounded-tl-full">Contact Us</button>
          </a>
        </div>

        <div>
          <Image
            src="/images/pizza-1.jpg"  
            alt="dashboard pic"
            width={1500} 
            height={1000}
          />
        </div>

        <div className="mt-8" id="menu">
          <h2 className="text-2xl font-bold text-gray-200">Menu Items</h2>
          <div className="grid grid-cols-3 gap-4 mt-4">
            
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <Image
                src="/images/photo-.avif" 
                alt="Pizza Margherita"
                width={300}
                height={200}
              />
              <h3 className="text-lg font-bold text-white">Pizza Margherita large</h3>
              <p className="text-gray-300">700PKR</p>
              <button
                onClick={() => addToCart({ name: "Pizza Margherita large", price: 700 })}
                className="mt-2 p-2  bg-rose-800 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
       
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <Image
                src="/images/pizza.jpg"
                alt="Pepperoni Pizza"
                width={300}
                height={100}
              />
              <h3 className="text-lg font-bold text-white">Peperoni Mushroom Pizza large</h3>
              <p className="text-gray-300">700PKR</p>
              <button
                onClick={() => addToCart({ name: "Peperoni Mushroom Pizza large", price: 700 })}
                className="mt-2 p-2  bg-rose-800 text-white rounded"
              >
                Add to Cart
              </button>
            </div>

            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <Image
                src="/images/photo-1.avif" 
                alt="Arabian Green Pizza"
                width={300}
                height={100}
              />
              <h3 className="text-lg font-bold text-white">Arabian Green Pizza large</h3>
              <p className="text-gray-300">700PKR</p>
              <button
                onClick={() => addToCart({ name: "Arabian Green Pizza large", price: 700 })}
                className="mt-2 p-2  bg-rose-800 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-gray-200">Shopping Cart</h2>
          <ul className="mt-4">
            {cart.map((item, index) => (
              <li key={index} className="text-gray-300">{item.name} - {item.price} PKR</li>
            ))}
          </ul>
          <div className="mt-2 text-white">Total: {calculateTotal()} PKR</div>
          <button className="mt-4 p-2 bg-yellow-500 text-white rounded">Place Order</button>
        </div>

      
        <div className="mt-8" id="deals">
          <h2 className="text-2xl font-bold text-gray-200">Current Deals</h2>
          <div className="grid grid-cols-2 gap-4 mt-4">
           
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <Image
                src="/images/image-1.jpg" 
                alt="Deal 1"
                width={300}
                height={300}
              />
              <h3 className="text-lg font-bold text-white">Buy 1 Get 1 Free</h3>
              <p className="text-gray-300">Only for 1200PKR!</p>
              <button
                onClick={() => addToCart({ name: "Buy 1 Get 1 Free", price: 1200 })}
                className="mt-2 p-2 bg-rose-800 text-white rounded"
              >
                Add to Cart
              </button>
            </div>

            {/* Deal Item 2 */}
            <div className="bg-white bg-opacity-20 p-4 rounded-lg">
              <Image
                src="/images/deal.webp" 
                alt="Deal 2"
                width={300}
                height={200}
              />
              <h3 className="text-lg font-bold text-white">Family Combo</h3>
              <p className="text-gray-300">Just for 1099PKR!</p>
              <button
                onClick={() => addToCart({ name: "Family Combo", price: 1099 })}
                className="mt-2 p-2 bg-rose-800 text-white rounded"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="mt-8" id="contact">
          <h2 className="text-2xl font-bold text-gray-200">Contact Us</h2>
          <p className="text-gray-300">Email: contact@pizzamania.com</p>
          <p className="text-gray-300">Phone: +92-334-87665-31</p>
          <p className="text-gray-300">Address: 123 Pizza Lane, Food City</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
