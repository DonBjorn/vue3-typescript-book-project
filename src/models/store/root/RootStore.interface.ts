import {ItemsStateInterface} from "@/models/store/ItemsState.interface";

/**
 * @name RootStoreInterface
 * @description
 * Envuelve las interfaces de los módulos del store en un solo lugar
 */
export interface RootStoreInterface{
    itemState: ItemsStateInterface,
}
