const PaymentSection = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6">
      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Opciones de Pago</h2>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium text-blue-700 mb-2">Pago con QR</h3>
        <div className="bg-gray-100 p-4 rounded flex justify-center">
          <div className="bg-white p-4 rounded">
            {/* Espacio para QR - en producción usaría un QR real */}
            <div className="w-32 h-32 bg-blue-100 flex items-center justify-center text-blue-500">
              QR Code
            </div>
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-lg font-medium text-blue-700 mb-2">Depósito Bancario</h3>
        <div className="bg-blue-50 p-4 rounded">
          <p className="text-blue-800 mb-2"><span className="font-medium">Banco:</span> Banco Ejemplo</p>
          <p className="text-blue-800 mb-2"><span className="font-medium">Cuenta:</span> 1234-5678-9012-3456</p>
          <p className="text-blue-800 mb-2"><span className="font-medium">CLABE:</span> 012345678901234567</p>
          <p className="text-blue-800"><span className="font-medium">Beneficiario:</span> Productos Alina</p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSection;