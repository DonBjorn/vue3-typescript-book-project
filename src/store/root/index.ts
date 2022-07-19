// Creación de instancia del modulo
import {createStore, StoreOptions} from "vuex";
import {
    RootStateInterface,
    RootStoreModel,
} from "@/models/store";

import {initialRootState} from "@/store/root/InitialState";
import {itemsState} from "@/store/items/module";
import {localesState} from "@/store/locales/module";

const storeOptions: StoreOptions<RootStateInterface> = {
    state: initialRootState,
    /**
     * Aquí se agregan los módulos adicionales
     */
    modules: {
        itemsState,
        localesState,
    }
};

// Instancia raíz del store de Vuex
export const rootStore: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions);

// "Helper" privado que llama a una acción de un módulo de Vuex desde un solo lugar para que podamos mantener
//  la interpolación de cadenas para "${moduleName}/${actionName}" en un unico sitio y así seamos capaz de llamar a la
//  acción con menos código y tipado fuerte
export function dispatchModuleAction<T>(moduleName: string, actionName: string, params?: T): void {
    rootStore.dispatch(`${moduleName}/${actionName}`, params);
}
