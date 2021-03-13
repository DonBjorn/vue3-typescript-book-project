// Creación de instancia del modulo
import {itemsState} from "@/store/items";
import {createStore, StoreOptions} from "vuex";
import {RootStateInterface, RootStoreModel} from "@/models/store";
import {initialRootState} from "@/store/root/InitialState";


const storeOptions: StoreOptions<RootStateInterface> = {
    state: initialRootState,
    /**
     * Aquí se agregan los módulos adicionales
     */
    modules: {
        itemsState
    }
};

// Instancia raíz del store de Vuex
export const store: RootStoreModel<RootStateInterface> = <any>createStore(storeOptions);
