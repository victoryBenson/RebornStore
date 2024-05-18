import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Loader } from './component/Loader.jsx'
import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import { ProductProvider} from './contexts/ProductContext.jsx'
import { CartProvider } from './contexts/CartContext.jsx'
import AuthContextProvider from './contexts/AuthContext.jsx'
import { UserProvider } from './contexts/UserContext.jsx'
import { SidebarProvider } from './contexts/SidebarContext.jsx'


if (process.env.NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthContextProvider>
    <UserProvider>
      <ProductProvider>
        <CartProvider>
          <SidebarProvider>
            <React.StrictMode>
              <App />
            </React.StrictMode>,
          </SidebarProvider>
        </CartProvider>
      </ProductProvider>
    </UserProvider>
  </AuthContextProvider>
)
