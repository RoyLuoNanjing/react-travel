import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import 'antd/dist/reset.css' //全局引用 ant design

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
