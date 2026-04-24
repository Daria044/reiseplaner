import type { PackingItem } from "../types/packingItems";


export const AllItems: PackingItem[] = [

  // 🧼 ALWAYS (immer dabei)
  { id: 1, name: "Zahnbürste", catergory: "Hygiene", checked: false, tags: ["always"] },
  { id: 2, name: "Zahnpasta", catergory: "Hygiene", checked: false, tags: ["always"] },
  { id: 3, name: "Unterwäsche", catergory: "Clothing", checked: false, tags: ["always"] },
  { id: 4, name: "Socken", catergory: "Clothing", checked: false, tags: ["always"] },

  // ❄️ WINTER
  { id: 5, name: "Winterjacke", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 6, name: "Pullover", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 7, name: "Schal", catergory: "Clothing", checked: false, tags: ["winter"] },
  { id: 8, name: "Handschuhe", catergory: "Clothing", checked: false, tags: ["winter"] },

  // 🌸 SPRING
  { id: 9, name: "Leichte Jacke", catergory: "Clothing", checked: false, tags: ["spring"] },
  { id: 10, name: "Sneakers", catergory: "Clothing", checked: false, tags: ["spring"] },

  // ☀️ SUMMER
  { id: 11, name: "T-Shirt", catergory: "Clothing", checked: false, tags: ["summer"] },
  { id: 12, name: "Shorts", catergory: "Clothing", checked: false, tags: ["summer"] },
  { id: 13, name: "Sonnencreme", catergory: "Extras", checked: false, tags: ["summer"] },
  { id: 14, name: "Sonnenbrille", catergory: "Extras", checked: false, tags: ["summer"] },

  // 🍂 AUTUMN
  { id: 15, name: "Regenjacke", catergory: "Clothing", checked: false, tags: ["autumn"] },
  { id: 16, name: "Regenschirm", catergory: "Extras", checked: false, tags: ["autumn"] },

  // 🏖️ BEACH
  { id: 17, name: "Badeanzug", catergory: "Activity", checked: false, tags: ["beach"] },
  { id: 18, name: "Flip-Flops", catergory: "Clothing", checked: false, tags: ["beach"] },
  { id: 19, name: "Strandtuch", catergory: "Extras", checked: false, tags: ["beach"] },

  // 🏃 SPORT
  { id: 20, name: "Sportschuhe", catergory: "Activity", checked: false, tags: ["sport"] },
  { id: 21, name: "Sportkleidung", catergory: "Clothing", checked: false, tags: ["sport"] },

  // 🏕️ CAMPING
  { id: 22, name: "Zelt", catergory: "Extras", checked: false, tags: ["camping"] },
  { id: 23, name: "Schlafsack", catergory: "Extras", checked: false, tags: ["camping"] },
  { id: 24, name: "Taschenlampe", catergory: "Extras", checked: false, tags: ["camping"] },

  // 🏙️ CITY
  { id: 25, name: "Bequeme Schuhe", catergory: "Clothing", checked: false, tags: ["city"] },
  { id: 26, name: "Rucksack", catergory: "Extras", checked: false, tags: ["city"] },

  // ✈️ FLIGHT
  { id: 27, name: "Reisepass", catergory: "Documents", checked: false, tags: ["flight"] },
  { id: 28, name: "Boardingpass", catergory: "Documents", checked: false, tags: ["flight"] },

  // 🚗 CAR
  { id: 29, name: "Führerschein", catergory: "Documents", checked: false, tags: ["car"] },

  // 🚆 TRAIN
  { id: 30, name: "Zugticket", catergory: "Documents", checked: false, tags: ["train"] },
];