import { AllItems } from "../types/items";
import type { PackingItem } from "../types/packingItems";


export function generatePackingList(formData: any): PackingItem[] {

  let result: PackingItem[] = [];
    AllItems.forEach((item)=>{
        if(item.tags.includes("always")){
            result.push(item);
        }
    });
    if(formData.weather=== "winter"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("winter")){
                result.push(item)
            }
        })
    }
     if(formData.weather=== "summer"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("summer")){
                result.push(item)
            }
        })
    }
     if(formData.weather=== "spring"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("spring")){
                result.push(item)
            }
        })
    }
     if(formData.weather=== "autumn"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("autumn")){
                result.push(item)
            }
        })
    }
     if(formData.activity=== "beach"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("beach")){
                result.push(item)
            }
        })
    }
     if(formData.activity=== "sport"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("sport")){
                result.push(item)
            }
        })
    }
     if(formData.activity=== "camping"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("camping")){
                result.push(item)
            }
        })
    }
     if(formData.activity=== "city"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("city")){
                result.push(item)
            }
        })
    }
         if(formData.transport=== "flight"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("flight")){
                result.push(item)
            }
        })
    }
         if(formData.transport=== "car"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("car")){
                result.push(item)
            }
        })
    }
             if(formData.transport=== "train"){
        AllItems.forEach((item)=>{
            if(item.tags.includes("train")){
                result.push(item)
            }
        })
    }
    
    
  return result;
}