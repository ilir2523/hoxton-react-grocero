import { useState } from 'react'
import './App.css'
import './reset.css'

import initialItems from './data/items'
import Header from './components/Header/Header'
import CartItemsList from './components/Main/CartItemsList'

function App() {
  const [items, setItems] = useState(initialItems)
  const [cartItems, setCartItems] = useState([])

  function addToCart(item) {
    const cartItemsList = [...cartItems]
    const itemFound = cartItemsList.find(function (cartItem) {
      return cartItem.name === item.name
    })
    if (itemFound === undefined) {
      const newCartItem = {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1
      }
      cartItemsList.push(newCartItem)
    } else {
      itemFound.quantity++
    }
    setCartItems(cartItemsList)
  }

  function removeFromCart(item) {
    let cartItemsList = [...cartItems]
    const itemFound = cartItemsList.find(function (cartItem) {
      return cartItem.name === item.name
    })
    itemFound.quantity--
    if (itemFound.quantity === 0) {
      cartItemsList = cartItemsList.filter(function (cartItem) {
        return cartItem.quantity > 0
      })
    }
    setCartItems(cartItemsList)
  }

  function calculatePrice() {
    let total = 0
    for (const item of cartItems) {
      total = total + item.price * item.quantity
    }
    return total.toFixed(2)
  }

  return (
    <body>
      <Header items={items} addToCart={addToCart} />

      <main id="cart">
        <h2>Your Cart</h2>
        <div className="cart--item-list-container">
          <CartItemsList cartItems={cartItems} addToCart={addToCart} removeFromCart={removeFromCart} />
        </div>

        <div className="total-section">
          <div>
            <h3>Total</h3>
          </div>

          <div>
            <span className="total-number">{`£${calculatePrice()}`}</span>
          </div>
        </div>
      </main>
    </body>
  )
}

export default App
