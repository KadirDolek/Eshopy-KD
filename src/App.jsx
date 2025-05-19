import './App.css'
import Navbar from './Components/Navbar/Navbar'
import Content from './Components/Content/Content'
import data from './data.json'
import Panier from './Components/Panier/Panier'
import { useState } from 'react'

function App() {
  const [panier, setPanier] = useState([]);
  const [total, setTotal] = useState(200);
  const [products, setProducts] = useState(data.map(item => ({...item,id: item.index})));
  const handleAddToPanier = (productId) => {
  const productToAdd = products.find(prod => prod.id === productId);


    if (productToAdd && productToAdd.stock > 0 && total >= productToAdd.prix) {
      const updatedProducts = products.map(prod =>
        prod.id === productId ? { ...prod, stock: prod.stock - 1 } : prod);
      setProducts(updatedProducts);

      const existingProductIndex = panier.findIndex(item => item.id === productId);

      if (existingProductIndex >= 0) {
        const updatedPanier = [...panier];
        updatedPanier[existingProductIndex] = {
          ...updatedPanier[existingProductIndex],
          quantity: (updatedPanier[existingProductIndex].quantity || 1) + 1,
          stock: productToAdd.stock - 1
        };
        setPanier(updatedPanier);
      } else {
        setPanier(prevPanier => [
          ...prevPanier,
          { 
            ...productToAdd, 
            stock: productToAdd.stock - 1,
            quantity: 1
          }
        ]);
      }
      setTotal(prevTotal => prevTotal - productToAdd.prix);
    }
  };

  return (
    <>
      <Navbar />
      <div id='carte' style={{ display: "flex", flexWrap: "wrap" }}>
        {products.map((tableau) => (
          <Content
            key={tableau.id}
            propriete={tableau}
            onAddToPanier={() => handleAddToPanier(tableau.id)}
          />
        ))}
      </div>
      <Panier panier={panier} monPorteMonnaie={total} />
    </>
  )
}

export default App