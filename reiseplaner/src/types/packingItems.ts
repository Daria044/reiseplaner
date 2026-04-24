export type PackingItem = {
    id: number;
    name: string;
    catergory: string;
    checked: boolean;
    tags: string[];
    priority?: number; 
    transport: string;

}