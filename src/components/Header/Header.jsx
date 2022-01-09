import ItemsList from "./ItemsList"

function Header (props){
    return( 
        <header id='store'>
        <h1>Grocero</h1>
        <ItemsList items={props.items} addToCart={props.addToCart} />
      </header>
)}

export default Header