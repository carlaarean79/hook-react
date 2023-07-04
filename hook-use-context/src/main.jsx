import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import {UseProvider} from './UseContext/UseContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UseProvider>
    <App />
    </UseProvider>
  </React.StrictMode>,
)
