import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Card from './components/Card.jsx';
import Brdr from './components/border.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Card username = "Tushar" cardno = "1" />
    <Brdr/>
    <Card username = "Divyansh" cardno = "2" />
    <Brdr/>
    <Card username = "Jatin" cardno = "3" />
  </StrictMode>,
)
