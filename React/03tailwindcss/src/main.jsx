import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
// import Unit5 from './Unit5.jsx'
import Unit123 from './Unit123'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Unit123/> */}
    <App/>
    {/* <Unit5/> */}
  </StrictMode>,
)
