import { useState } from 'react';
import AdminPanel from './components/AdminPanel';
import ClientView from './components/ClientView';

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div>
      {isAdmin ? (
        <AdminPanel />
      ) : (
        <ClientView />
      )}
      
      <div className="fixed bottom-4 right-4">
        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className="bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          {isAdmin ? 'Ver como Cliente' : 'Acceso Admin'}
        </button>
      </div>
    </div>
  );
};

export default App;

// DONE