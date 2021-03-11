import {createStore} from 'vuex'
import {ItemsStateInterface} from "@/models/store/ItemsState.interface";
import {ItemInterface} from "@/models/items/Item.interface";
import apiClient from "@/api-client";

const state: ItemsStateInterface = {
    loading: false,
    items: [],
}

export default createStore({
    state: state,
    mutations: {
        loadingItems(state: ItemsStateInterface) {
            state.loading = true
            state.items = []
        },
        loadedItems(state: ItemsStateInterface, items: ItemInterface[]) {
            state.items = items
            state.loading = false
        },
        selectItem(state: ItemsStateInterface, params: {
            id: number,
            selected: boolean
        }) {
            const { id, selected } = params

            const item = state.items.find(o => o.id === id)
            if (item) {
                item.selected = selected
            }
        }
    },
    actions: {
        loadItems({commit, state}) {
            commit('loadingItems');

            // Fingiremos que hemos llamado a un recurso de un API
            // y tarda 1 segundo en devolvernos los datos
            // usando un setTimeout de JavaScript con 1000 milisegundos como opción
            setTimeout(() => {
                apiClient.items.fetchItems()
                    .then((data : ItemInterface[]) => {
                    commit('loadedItems', data);
                }).catch((error) => {
                    console.error(error);
                })
            }, 1000)
        },
        selectItem({ commit }, params: {
            id: number
            selected: boolean
        }) {
            commit('selectItem', params)
        },
    },
    modules: {}
})
