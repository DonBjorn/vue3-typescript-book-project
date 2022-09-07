import {StateInterface} from "./State.interface";
import {MutationsInterface} from "./Mutations.interface";
import {ActionsInterface} from "./Actions.interface";

export interface StoreInterface {
    state: StateInterface;
    mutations: MutationsInterface;
    actions: ActionsInterface;
}
