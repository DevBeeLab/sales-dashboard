// First initialize the createContext function from React
import { createContext, useState, useEffect } from "react";

// Create a new context for products
const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 useEffect(() => {
    async function loadProducts() {
        try {
            const response = await fetch('https://fakeapi.com/products');
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setError(err.message || 'Failed to load products');
        } finally {
            setLoading(false);
        }
    }

    loadProducts();
 }, []);

 return (
    <ProductContext.Provider value={{ products, loading, error }}>
      {children}
    </ProductContext.Provider>
  );
}


