import CartItem from "./CartItem"

function CartItemsList(props) {
  return (
    <ul className="item-list cart--item-list">
      {props.cartItems.map((cartItem) => (
        <CartItem
          cartItem={cartItem}
          key={`item-${cartItem.id}`}
          addToCart={props.addToCart}
          removeFromCart={props.removeFromCart}
        />
      ))}
    </ul>
  )
}

export default CartItemsList
