import React, { useState } from 'react';

interface Item {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

const defaultItems: Item[] = [
  { id: 1, name: 'Item 1', description: 'Description 1', price: 10.99, image: '' },
  { id: 2, name: 'Item 2', description: 'Description 2', price: 9.99, image: '' },
  { id: 3, name: 'Item 3', description: 'Description 3', price: 12.99, image: '' },
];

const ShoppingCart = () => {
  const [items, setItems] = useState(defaultItems);
  const [cart, setCart] = useState<Item[]>([]);

  const handleAddToCart = (item: Item) => {
    setCart([...cart, item]);
  };

  const handleRemoveFromCart = (item: Item) => {
    setCart(cart.filter((i) => i.id !== item.id));
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Shopping Cart</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-3/4">
          <h2 className="text-2xl font-bold mb-4">Items</h2>
          <ul>
            {items.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-16 h-16 mr-4" />
                  <div>
                    <h3 className="text-lg font-bold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
                <div>
                  <p className="text-lg font-bold">${item.price}</p>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleAddToCart(item)}
                  >
                    Add to Cart
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full md:w-1/4">
          <h2 className="text-2xl font-bold mb-4">Cart</h2>
          <ul>
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between items-center mb-4">
                <div>
                  <h3 className="text-lg font-bold">{item.name}</h3>
                  <p className="text-gray-600">${item.price}</p>
                </div>
                <button
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleRemoveFromCart(item)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <p className="text-lg font-bold">
            Total: ${cart.reduce((acc, item) => acc + item.price, 0)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCart;