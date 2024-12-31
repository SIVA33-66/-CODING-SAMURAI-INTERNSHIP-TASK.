import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './todolist.css'
import App from './TodoList.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
