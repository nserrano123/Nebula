import ReactDOM from 'react-dom/client';
import App from './list_example';

const rootElement = document.getElementById('root');

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<App />);
} else {
  console.error("Elemento con id 'root' no encontrado en el DOM.");
}
