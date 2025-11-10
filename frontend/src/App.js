import React, { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>E-Commerce Website</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((p) => (
          <div key={p._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", width: "200px" }}>
            <img src={p.image} alt={p.name} style={{ width: "100%" }} />
            <h3>{p.name}</h3>
            <p>${p.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
