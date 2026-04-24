import { useState } from "react";
import { PackingForm } from "../components/PackingForm";
import { PackingList } from "../components/PackingList";
import { AllItems } from "../types/items";
import type { PackingItem } from "../types/packingItems";
// import { generatePackingList } from "../utils/generatePackingList";

export function PackingPage() {

  // TODO 1: State für PackingList erstellen
  // → Array von PackingItem
  const [items, setItems] = useState<PackingItem[]>([]);

  // TODO 2: Funktion zum ERSETZEN der Liste
  function setPackingList(newList: PackingItem[]) {
    // TODO: optional console.log(newList)
    setItems(newList);
  }

  // TODO 3: CREATE (manuell ein Item hinzufügen)
  function addItem(newItem: PackingItem) {
    // TODO: neues Item zur bestehenden Liste hinzufügen
  }

  // TODO 4: DELETE (Item löschen)
  function deleteItem(id: number) {
    // TODO: Item mit dieser id aus der Liste entfernen
  }

  // TODO 5: UPDATE (Checkbox togglen)
  function toggleItem(id: number) {
    // TODO: checked von einem Item ändern (true/false)
  }

  // TODO 6: FORM HANDLER
  function handleFormSubmit(formData: any) {
    // TODO:
    // 1. generatePackingList aufrufen
    // 2. neue Liste bekommen
    // 3. setPackingList(newList) aufrufen
  }

  // TODO 7: TEST-DATEN
  // → 2–3 Items aus ALL_ITEMS nehmen
  // → setPackingList damit aufrufen (einmal beim Laden)

  return (
    <div>
      <h1>Packing Planner</h1>

      {/* TODO: Form Funktion übergeben */}
      <PackingForm />

      {/* TODO: items + delete + toggle übergeben */}
      <PackingList />
    </div>
  );
}