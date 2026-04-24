import { PackingItem } from "./PackingItem";
import "../styles/packing.css";
export function PackingList(props: any) {
  const items = props.items;

  return (
    <div className="list">
      <h2>Liste</h2>
      {items.map((item: any) => (
        <PackingItem
          key={item.id}
          item={item}
          onDelete={props.onDelete}
          onToggle={props.onToggle}
        />
      ))}
    </div>
  );
}
