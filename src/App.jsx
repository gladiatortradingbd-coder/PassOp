import './App.css';
import { Navbar, Footer } from './components/layout';
import Manager from './components/Manager';
import { Toaster } from 'sonner';

/**
 * Main App component
 */
function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Toast Notifications */}
      <Toaster
        position="top-right"
        richColors
        expand
        closeButton
        toastOptions={{
          style: {
            background: '#fff',
            border: '1px solid #16a34a',
            borderRadius: '12px',
          },
          className: 'sonner-toast',
          duration: 3000,
        }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <div className="flex-1">
        <Manager />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;