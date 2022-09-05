import {ActionsInterface, ActionsModel, MutationsInterface, MutationsModel, StateInterface} from "../store-models";

export interface StoreInterface {
    state: StateInterface;
    mutations: MutationsInterface;
    actions: ActionsInterface;
}

export class StoreModel implements StoreInterface {
    readonly state!: StateInterface;
    readonly mutations!: MutationsInterface;
    readonly actions!: ActionsInterface;

    constructor(state: StateInterface) {
        this.state = state;
        this.mutations = new MutationsModel(this.state);
        this.actions = new ActionsModel(this);
    }
}
