import "../styles/packing.css";
export function PackingItem(props: any) {

    const item = props.item;

  return (
<div className="item">
  <div className="item-left">
    <input
      type="checkbox"
      checked={item.checked}
      onChange={() => props.onToggle(item.id)}
    />

    <span className={`item-text ${item.checked ? "checked" : ""}`}>
      {item.name} ({item.category})
    </span>
  </div>

  <button
    className="delete-btn"
    onClick={() => props.onDelete(item.id)}
  >
    löschen
  </button>
</div>
  );
}