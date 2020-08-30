import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'

import { AppStateProvider } from './AppStateContext'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
