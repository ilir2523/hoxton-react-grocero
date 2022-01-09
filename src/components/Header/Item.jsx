function Item (props){
    return( 
        <li> 
        <div className="store--item-icon">
            <img src={`./assets/icons/${props.item.id}-${props.item.name}.svg`} alt={`${props.item.name}`} />
        </div>
        <button onClick={() => props.addToCart(props.item) }>Add to cart</button>
    </li>
)}

export default Item