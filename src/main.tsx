import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './styles/indexAppContext.css';
import Root from './AppContext';
// import DessertsList from './DessertsList'; // Uncomment if needed

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Root />
  </StrictMode>
);

