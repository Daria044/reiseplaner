import { useState } from "react";
import { PackingForm } from "../components/PackingForm";
import { PackingList } from "../components/PackingList";
import { AllItems } from "../types/items";
import type { PackingItem } from "../types/packingItems";
import { generatePackingList } from "../utils/generatePackingList";
import "../styles/packing.css";

export function PackingPage() {
  const [items, setItems] = useState<PackingItem[]>([]);

  function setPackingList(newList: PackingItem[]) {
    setItems(newList);
  }
  function addItem(newItem: PackingItem) {
    setItems([...items, newItem]);
  }
  function deleteItem(id: number) {
    const update = items.filter((item) => item.id !== id);
    setItems(update);
  }

  function toggleItem(id: number) {
    const updated = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item,
    );
    setItems(updated);
  }

  function handleSubmit(formData: any) {
    const newList = generatePackingList(formData);
    setPackingList(newList);
  }

  return (
  <div className="page">
      <h1>Packing Planner</h1>

      <PackingForm onSubmit={handleSubmit} />

      <PackingList items={items} onDelete={deleteItem} onToggle={toggleItem} />
    </div>
  );
}
