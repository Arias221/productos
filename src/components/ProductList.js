import { useState, useEffect } from 'react';

const ProductList = ({ products }) => {
  const [displayedProducts, setDisplayedProducts] = useState([]);

  useEffect(() => {
    setDisplayedProducts(products);
  }, [products]);

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Nuestros Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedProducts.map((product, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition">
            {product.image && (
              <div className="mb-4 h-48 bg-blue-100 rounded flex items-center justify-center overflow-hidden">
                <img 
                  src={URL.createObjectURL(product.image)} 
                  alt={product.name}
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            )}
            <h3 className="text-xl font-medium text-blue-700">{product.name}</h3>
            <p className="text-blue-600 font-bold my-2">${product.price}</p>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;