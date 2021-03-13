import { ItemInterface } from '@/models/items/Item.interface'

export class ItemsStateInterface {
    loading: boolean = false;
    items: ItemInterface[] = [];
}
