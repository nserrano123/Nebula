import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/indexAppContext.css'
// import App from './AppList'
import Root from './AppContext'
import DessertsList from './DessertsList'

createRoot(document.getElementById('root')!).render(
  <StrictMode>

    <Root />
    
  </StrictMode>,
)
