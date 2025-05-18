import { useState } from 'react';
import ProductForm from './ProductForm';

const AdminPanel = () => {
  const [products, setProducts] = useState([]);

  const handleAddProduct = (newProduct) => {
    setProducts(prev => [...prev, { ...newProduct, publicado: false }]);
  };

  const togglePublish = (index) => {
    const updatedProducts = [...products];
    updatedProducts[index].publicado = !updatedProducts[index].publicado;
    setProducts(updatedProducts);
  };

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-blue-800">Panel de Administración</h1>
          <p className="text-blue-600">Gestión de productos</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <ProductForm onAddProduct={handleAddProduct} />
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Productos Creados</h2>
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <table className="min-w-full divide-y divide-blue-200">
                <thead className="bg-blue-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Producto</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Precio</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-blue-700 uppercase tracking-wider">Estado</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-blue-200">
                  {products.map((product, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-blue-900">{product.name}</div>
                        <div className="text-sm text-blue-500">{product.categoria}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-blue-900">${product.price}</td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => togglePublish(index)}
                          className={`px-3 py-1 rounded-full text-xs font-medium ${product.publicado ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}
                        >
                          {product.publicado ? 'Publicado' : 'No publicado'}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;