
import React from "react";
import './../styles/App.css';
import { useState } from "react";

const App = () => {
  const itemData = [
    { name: "Apple", quantity: 22 },
    { name: "Banana", quantity: 10 },
    { name: "Razor", quantity: 5 },
    { name: "CornFlex", quantity: 30 },
    { name: "Iphone", quantity: 80 },
  ];
  const [items, setItems] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
     <input
        type="number"
        value={items}
        onChange={(e) => setItems(e.target.value)}
      />
         <table border="1">
        <thead>
          <tr>
            <th>Item</th>
            <th>Value</th>
          </tr>
        </thead>
        <tbody>
          {itemData.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td style={{ color: item.quantity > items ? 'red' : 'green' }}>
                {item.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default App
