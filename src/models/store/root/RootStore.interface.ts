import {ItemsStateInterface, LocalesStateInterface} from "@/models/store";

/**
 * @name RootStoreInterface
 * @description
 * Envuelve las interfaces de los módulos del store en un solo lugar
 */
export interface RootStoreInterface{
    itemsState: ItemsStateInterface,
    localesState: LocalesStateInterface
}
