import type { PackingItem } from "../types/packingItems";

export const AllItems: PackingItem[] = [
  // ALWAYS
  { id: 1, name: "Zahnbürste", catergory: "Hygiene", checked: false, tags: ["always"] },
  { id: 2, name: "Zahnpasta", catergory: "Hygiene", checked: false, tags: ["always"] },
  { id: 3, name: "Unterwäsche", catergory: "Clothing", checked: false, tags: ["always"], multiplyByDuration: true },
  { id: 4, name: "Socken", catergory: "Clothing", checked: false, tags: ["always"], multiplyByDuration: true },
  { id: 5, name: "Deodorant", catergory: "Hygiene", checked: false, tags: ["always"] },
  { id: 6, name: "Ladekabel", catergory: "Extras", checked: false, tags: ["always"] },
  { id: 7, name: "Medikamente", catergory: "Hygiene", checked: false, tags: ["always"] },

  // WINTER
  { id: 8, name: "Winterjacke", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 9, name: "Pullover", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 10, name: "Schal", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 11, name: "Handschuhe", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 12, name: "Mütze", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 13, name: "Thermohose", catergory: "Clothing", checked: false, tags: ["winter"] },

  // SPRING
  { id: 14, name: "Leichte Jacke", catergory: "Clothing", checked: false, tags: ["spring"] },
  { id: 15, name: "Sneakers", catergory: "Clothing", checked: false, tags: ["spring"] },
  { id: 16, name: "Jeans", catergory: "Clothing", checked: false, tags: ["spring"] },
  { id: 17, name: "Dünner Pullover", catergory: "Clothing", checked: false, tags: ["spring"] },

  // SUMMER
  { id: 18, name: "T-Shirt", catergory: "Clothing", checked: false, tags: ["summer"], multiplyByDuration: true },
  { id: 19, name: "Shorts", catergory: "Clothing", checked: false, tags: ["summer"], multiplyByDuration: true },
  { id: 20, name: "Sonnencreme", catergory: "Extras", checked: false, tags: ["summer"] },
  { id: 21, name: "Sonnenbrille", catergory: "Extras", checked: false, tags: ["summer"] },
  { id: 22, name: "Sandalen", catergory: "Clothing", checked: false, tags: ["summer"] },
  { id: 23, name: "Trinkflasche", catergory: "Extras", checked: false, tags: ["summer"] },

  // AUTUMN
  { id: 24, name: "Regenjacke", catergory: "Clothing", checked: false, tags: ["autumn"] },
  { id: 25, name: "Regenschirm", catergory: "Extras", checked: false, tags: ["autumn"] },
  { id: 26, name: "Wasserdichte Schuhe", catergory: "Clothing", checked: false, tags: ["autumn"] },
  { id: 27, name: "Regenhose", catergory: "Clothing", checked: false, tags: ["autumn"] },

  // BEACH
  { id: 28, name: "Badeanzug", catergory: "Activity", checked: false, tags: ["beach"] },
  { id: 29, name: "Flip-Flops", catergory: "Clothing", checked: false, tags: ["beach"] },
  { id: 30, name: "Strandtuch", catergory: "Extras", checked: false, tags: ["beach"] },
  { id: 31, name: "Sonnenhut", catergory: "Clothing", checked: false, tags: ["beach"] },
  { id: 32, name: "Schnorchel", catergory: "Activity", checked: false, tags: ["beach"] },

  // SPORT
  { id: 33, name: "Sportschuhe", catergory: "Activity", checked: false, tags: ["sport"] },
  { id: 34, name: "Sportkleidung", catergory: "Clothing", checked: false, tags: ["sport"], multiplyByDuration: true },
  { id: 35, name: "Sportflasche", catergory: "Extras", checked: false, tags: ["sport"] },
  { id: 36, name: "Sporthandtuch", catergory: "Extras", checked: false, tags: ["sport"] },

  // CAMPING
  { id: 37, name: "Zelt", catergory: "Extras", checked: false, tags: ["camping"] },
  { id: 38, name: "Schlafsack", catergory: "Extras", checked: false, tags: ["camping"] },
  { id: 39, name: "Taschenlampe", catergory: "Extras", checked: false, tags: ["camping"] },
  { id: 40, name: "Isomatte", catergory: "Extras", checked: false, tags: ["camping"] },
  { id: 41, name: "Campingkocher", catergory: "Extras", checked: false, tags: ["camping"] },

  // CITY
  { id: 42, name: "Bequeme Schuhe", catergory: "Clothing", checked: false, tags: ["city"] },
  { id: 43, name: "Rucksack", catergory: "Extras", checked: false, tags: ["city"] },
  { id: 44, name: "Powerbank", catergory: "Extras", checked: false, tags: ["city"] },
  { id: 45, name: "Stadtplan", catergory: "Documents", checked: false, tags: ["city"] },

  // FLIGHT
  { id: 46, name: "Reisepass", catergory: "Documents", checked: false, tags: ["flight"] },
  { id: 47, name: "Boardingpass", catergory: "Documents", checked: false, tags: ["flight"] },
  { id: 48, name: "Nackenkissen", catergory: "Extras", checked: false, tags: ["flight"] },
  { id: 49, name: "Kopfhörer", catergory: "Extras", checked: false, tags: ["flight"] },

  // CAR
  { id: 50, name: "Führerschein", catergory: "Documents", checked: false, tags: ["car"] },
  { id: 51, name: "Fahrzeugpapiere", catergory: "Documents", checked: false, tags: ["car"] },
  { id: 52, name: "Ladekabel Auto", catergory: "Extras", checked: false, tags: ["car"] },

  // TRAIN
  { id: 53, name: "Zugticket", catergory: "Documents", checked: false, tags: ["train"] },
  { id: 54, name: "Buch", catergory: "Extras", checked: false, tags: ["train"] },
  { id: 55, name: "Snack", catergory: "Extras", checked: false, tags: ["train"] },
];
