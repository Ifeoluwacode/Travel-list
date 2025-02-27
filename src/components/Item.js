
export default function Item({ item, deleteItems, handlePack }) {
  return (
      <li>
        <input type="checkbox" value={item.packed} onClick={() => handlePack(item.id)} />
        <span style={item.packed ? { textDecoration: "line-through" } : {}}> {item.quantity} {item.description} </span>
        <button onClick={() => deleteItems(item.id)}>❌</button>
      </li>

  );
}
