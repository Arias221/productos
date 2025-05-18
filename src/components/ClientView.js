import { useState } from 'react';
import PaymentSection from './PaymentSection';
import RatingSection from './RatingSection';

const productos = [
  { nombre: "Olla antiadherente", categoria: "Utensilios de cocina", precio: 80, descripcion: "Ideal para cocinar sin que se pegue la comida.", publicado: true },
  { nombre: "Crema hidratante", categoria: "Productos de belleza", precio: 45, descripcion: "Hidrata y suaviza la piel.", publicado: true },
  { nombre: "Zapatos cómodos", categoria: "Calzados", precio: 120, descripcion: "Perfectos para caminar todo el día.", publicado: true },
  { nombre: "Suplemento vitamínico", categoria: "Productos de salud", precio: 65, descripcion: "Fortalece tu sistema inmunológico.", publicado: false },
];

const ClientView = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todas');
  const [priceRange, setPriceRange] = useState(null);
  const [customMaxPrice, setCustomMaxPrice] = useState('');

  const categories = ['Todas', ...new Set(productos.filter(p => p.publicado).map(p => p.categoria))];
  const priceRanges = [
    { label: 'Hasta $50', value: 50 },
    { label: 'Hasta $70', value: 70 },
    { label: 'Hasta $100', value: 100 },
    { label: 'Hasta $150', value: 150 },
    { label: 'Hasta $200 o más', value: 200 },
  ];

  const filteredProducts = productos.filter(product => {
    if (!product.publicado) return false;
    
    const matchesCategory = selectedCategory === 'Todas' || product.categoria === selectedCategory;
    
    let matchesPrice = true;
    if (priceRange !== null) {
      matchesPrice = priceRange === 200 ? 
        product.precio >= priceRange : 
        product.precio <= priceRange;
    } else if (customMaxPrice) {
      matchesPrice = product.precio <= Number(customMaxPrice);
    }
    
    return matchesCategory && matchesPrice;
  });

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-blue-800">Productos Alina</h1>
          <p className="text-blue-600 mt-2">Bienvenido a nuestra tienda</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Filtros */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-blue-700 mb-3">Categorías</h2>
              <div className="space-y-2">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full text-left px-3 py-2 rounded ${selectedCategory === category ? 'bg-blue-100 text-blue-800' : 'hover:bg-blue-50'}`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-lg font-semibold text-blue-700 mb-3">Rango de Precio</h2>
              <div className="space-y-2 mb-4">
                {priceRanges.map(range => (
                  <button
                    key={range.value}
                    onClick={() => setPriceRange(range.value)}
                    className={`w-full text-left px-3 py-2 rounded ${priceRange === range.value ? 'bg-blue-100 text-blue-800' : 'hover:bg-blue-50'}`}
                  >
                    {range.label}
                  </button>
                ))}
              </div>
              
              <div>
                <label className="block text-blue-700 mb-2">Precio máximo personalizado:</label>
                <div className="flex">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-300 bg-blue-50 text-blue-800">$</span>
                  <input
                    type="number"
                    placeholder="Ej: 120"
                    value={customMaxPrice}
                    onChange={(e) => {
                      setCustomMaxPrice(e.target.value);
                      setPriceRange(null);
                    }}
                    className="flex-1 min-w-0 block w-full px-3 py-2 rounded-none rounded-r-md border border-blue-300"
                  />
                </div>
              </div>
            </div>

            <PaymentSection />
          </div>

          {/* Productos */}
          <div className="lg:col-span-3">
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h2 className="text-xl font-semibold text-blue-800">
                {filteredProducts.length} {filteredProducts.length === 1 ? 'producto encontrado' : 'productos encontrados'}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredProducts.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <div className="h-48 bg-blue-100 flex items-center justify-center">
                    <span className="text-blue-500 text-4xl">📦</span>
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start">
                      <h3 className="text-lg font-medium text-blue-800">{product.nombre}</h3>
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm">
                        ${product.precio}
                      </span>
                    </div>
                    <p className="text-blue-600 text-sm mt-1">{product.categoria}</p>
                    <p className="text-gray-600 mt-3">{product.descripcion}</p>
                  </div>
                  <div className="px-4 pb-4">
                    <RatingSection productId={index} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientView;