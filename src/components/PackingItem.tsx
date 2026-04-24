import type { PackingItem as PackingItemType } from "../types/packingItems";
import "../styles/packing.css";

type PackingItemProps = {
  item: PackingItemType;
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export function PackingItem({
  item,
  onDelete,
  onToggle,
}: PackingItemProps) {
  const quantity = item.quantity ?? 1;
  const itemLabel = quantity > 1 ? `${quantity} ${item.name}` : item.name;

  return (
    <div className="item">
      <div className="item-left">
        <input
          type="checkbox"
          checked={item.checked}
          onChange={() => onToggle(item.id)}
        />

        <div className="item-details">
          <span className={`item-text ${item.checked ? "checked" : ""}`}>
            {itemLabel}
          </span>
          <span className="item-category">{item.catergory}</span>
        </div>
      </div>

      <button className="delete-btn" onClick={() => onDelete(item.id)}>
        Löschen
      </button>
    </div>
  );
}
