import {ItemsStateInterface, StoreModuleNames} from "@/models/store";
import {dispatchModuleAction, rootStore} from "@/store";

/**
 * @name itemsStore
 * @description
 * Wrapper del store de Items que deveuelve itemsState y repone una acción action<t> genérica
 */
const itemsStore = {
    get state(): ItemsStateInterface {
        return rootStore.state.itemsState;
    },
    action<T>(actionName: string, params?: T): void {
        dispatchModuleAction(StoreModuleNames.itemsState, actionName, params);
    },
};

// Exportamos el wrapper usando la convección del API de composición
export const useItemsStore = () => {
    return itemsStore;
};
