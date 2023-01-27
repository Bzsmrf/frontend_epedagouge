import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Aos from 'aos'
import './index.css'

Aos.init();
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
