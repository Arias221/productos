import { useState } from 'react';

const ProductForm = ({ onAddProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    price: '',
    description: '',
    image: null
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct(prev => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    setProduct(prev => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddProduct(product);
    setProduct({
      name: '',
      price: '',
      description: '',
      image: null
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Agregar Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-blue-700 mb-2">Nombre</label>
          <input
            type="text"
            name="name"
            value={product.name}
            onChange={handleChange}
            className="w-full p-2 border border-blue-200 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 mb-2">Precio</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            className="w-full p-2 border border-blue-200 rounded"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 mb-2">Descripción</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            className="w-full p-2 border border-blue-200 rounded"
            rows="3"
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 mb-2">Imagen (opcional)</label>
          <input
            type="file"
            onChange={handleImageChange}
            className="w-full p-2 border border-blue-200 rounded"
            accept="image/*"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Agregar Producto
        </button>
      </form>
    </div>
  );
};

export default ProductForm;