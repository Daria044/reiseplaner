import { PackingItem } from "./PackingItem";
import type { PackingItem as PackingItemType } from "../types/packingItems";
import "../styles/packing.css";

type PackingListProps = {
  items: PackingItemType[];
  onDelete: (id: number) => void;
  onToggle: (id: number) => void;
};

export function PackingList({ items, onDelete, onToggle }: PackingListProps) {
  return (
    <div className="list">
      <div className="section-header">
        <h2>Liste</h2>
        <p className="section-copy">
          Doppelte Kleidungsstücke werden automatisch zusammengefasst.
        </p>
      </div>

      {items.length === 0 ? (
        <p className="empty-state">
          Stelle dir deine Packliste oben zusammen und sie erscheint hier.
        </p>
      ) : (
        items.map((item) => (
          <PackingItem
            key={item.id}
            item={item}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
}
