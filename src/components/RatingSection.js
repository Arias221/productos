import { useState } from 'react';

const RatingSection = ({ productId }) => {
  const [rating, setRating] = useState({
    productRating: 0,
    serviceRating: 0,
    comment: ''
  });

  const handleRatingChange = (type, value) => {
    setRating(prev => ({ ...prev, [type]: value }));
  };

  const handleCommentChange = (e) => {
    setRating(prev => ({ ...prev, comment: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí iría la lógica para guardar la valoración
    console.log('Valoración enviada:', rating);
    setRating({
      productRating: 0,
      serviceRating: 0,
      comment: ''
    });
  };

  const renderStars = (type, currentRating) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => handleRatingChange(type, star)}
            className={`text-2xl ${star <= currentRating ? 'text-yellow-400' : 'text-gray-300'}`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Califica tu Experiencia</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-blue-700 mb-2">Calificación del Producto</label>
          {renderStars('productRating', rating.productRating)}
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 mb-2">Calificación del Servicio</label>
          {renderStars('serviceRating', rating.serviceRating)}
        </div>
        <div className="mb-4">
          <label className="block text-blue-700 mb-2">Comentario (opcional)</label>
          <textarea
            value={rating.comment}
            onChange={handleCommentChange}
            className="w-full p-2 border border-blue-200 rounded"
            rows="3"
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Enviar Valoración
        </button>
      </form>
    </div>
  );
};

export default RatingSection;