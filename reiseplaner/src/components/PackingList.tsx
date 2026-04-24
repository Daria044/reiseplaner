import { PackingItem } from "./PackingItem";
export function PackingList(props: any) {
  const items = props.items;

  return (
    <div>
      <h2>Liste</h2>
      {items.map((item: any) => (
        <PackingItem key={item.id} item={item} />
      ))}
    </div>
  );
}
