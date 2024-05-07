import React from 'react'
import { Link } from 'react-router-dom'

export const CheckoutSuccess = () => {
  return (
    <div>
        <h1>Your order has been placed 🚀</h1>
        <Link to="/order" className="btn-filled">
            Check your order
        </Link>
    </div>
  )
}
