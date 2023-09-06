
function Item({ item, onDeleteItem, onToggleItem }) {
    console.log("item", item);
  
    return (
      <li>
        <input type='checkbox' onChange={() => onToggleItem(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}>{item.quantity} {item.description}</span>
        <button onClick={() => onDeleteItem(item.id)}>❌</button>
      </li>
    )
  }

  export default Item;
