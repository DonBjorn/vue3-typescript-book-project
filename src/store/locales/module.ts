// Creación de instancia del modulo
import { Module, MutationTree, ActionTree, GetterTree} from "vuex";

import { MutationType, RootStateInterface, LocalesStateInterface } from "@/models/store";
import { initialLocalesState } from "@/store/locales/InitialState";

import { i18n } from "@/plugins/vue-i18n-next-plugin";

import apiClient from "@/api-client";

export const mutations: MutationTree<LocalesStateInterface> = {
    selectLocale(state: LocalesStateInterface, localeId: string){
        // Cambia a true solo el seleccionado
        state.availableLocales.forEach((localeInfo) => {
            localeInfo.selected = (localeInfo.locale === localeId);
            if (localeInfo.selected){
                i18n.global.locale.value = localeInfo.locale;
            }
        })
    }
};

export const actions: ActionTree<LocalesStateInterface, RootStateInterface> = {
    selectLocale({ commit }, localeId: string) {
        commit(MutationType.locales.selectLocale, localeId)
    },
};

export const getters: GetterTree<LocalesStateInterface, RootStateInterface> = {};

// Instancia del Store de Locales
const namespaced: boolean = true;
const state: LocalesStateInterface = initialLocalesState;

export const localesState: Module<LocalesStateInterface, RootStateInterface> = {
  namespaced,
  state,
  getters,
  actions,
  mutations
};
