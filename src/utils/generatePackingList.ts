import { AllItems } from "../types/items";
import type { PackingItem } from "../types/packingItems";

type PackingFormData = {
  activity: string;
  duration: number;
  gender: string;
  transport: string;
  weather: string;
};

function addOrUpdateItem(
  result: PackingItem[],
  item: PackingItem,
  quantity = 1,
) {
  if (quantity <= 0) {
    return;
  }

  const existingItem = result.find(
    (resultItem) =>
      resultItem.name === item.name &&
      resultItem.catergory === item.catergory,
  );

  if (existingItem) {
    existingItem.quantity = (existingItem.quantity ?? 1) + quantity;
    return;
  }

  result.push({
    ...item,
    quantity,
  });
}

function addItemsByTag(
  result: PackingItem[],
  tag: string,
  duration: number,
) {
  AllItems.forEach((item) => {
    if (!item.tags.includes(tag)) {
      return;
    }

    const quantity = item.multiplyByDuration ? Math.max(duration, 0) : 1;

    addOrUpdateItem(result, item, quantity);
  });
}

export function generatePackingList(formData: PackingFormData): PackingItem[] {
  const result: PackingItem[] = [];

  addItemsByTag(result, "always", formData.duration);

  [formData.weather, formData.activity, formData.transport]
    .filter(Boolean)
    .forEach((tag) => {
      addItemsByTag(result, tag, formData.duration);
    });

  return result;
}
