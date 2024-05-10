import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Loader } from './component/Loader.jsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { ProductProvider} from './contexts/ProductContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'


if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <ProductProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>,
      </CartProvider>
    </ProductProvider>
  </AuthContextProvider>
)
