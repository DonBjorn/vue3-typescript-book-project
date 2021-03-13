import {ItemInterface} from "@/models/items/Item.interface";

/**
 * @name ItemsStateInterface
 * @description
 * Interface para los Item State
 */
export interface ItemsStateInterface {
    loading: boolean,
    items: ItemInterface[];
}
