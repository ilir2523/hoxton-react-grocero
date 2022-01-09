import Item from "./Item"

function ItemsList(props) {
    return (
        <ul className="item-list store--item-list">
            {props.items.map((item) => (
                <Item item={item} key={`item-${item.id}`} addToCart={props.addToCart}/>
            ))}
        </ul>
    )
}

export default ItemsList