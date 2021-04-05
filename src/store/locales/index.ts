import { LocalesStateInterface, StoreModuleNames} from "@/models/store";
import {dispatchModuleAction, rootStore} from "@/store";

/**
 * @name localesStore
 * @description
 * Wrapper del store de Locales que deveuelve localesState y repone una acción action<T> genérica
 * Generado automáticamente con Plop.js
 */
const localesStore = {
    get state(): LocalesStateInterface {
        return rootStore.state.localesState;
    },
    action<T>(actionName: string, params?: T): void {
        dispatchModuleAction(StoreModuleNames.localesState, actionName, params);
    },
};

// Exportamos el wrapper usando la convección del API de composición
export const useLocalesStore = () => {
    return localesStore;
};
