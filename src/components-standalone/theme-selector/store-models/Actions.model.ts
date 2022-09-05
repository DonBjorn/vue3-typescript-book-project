import {ThemeInfoInterface} from "../models";
import {LocalStorageKeys, StoreInterface} from "../store-models";

export interface ActionsInterface {
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}

export class ActionsModel implements ActionsInterface{
    private readonly store!: StoreInterface;

    constructor(store: StoreInterface) {
        this.store = store;
    }

    loadThemes(themes: ThemeInfoInterface[]): void {
        this.store.mutations.loadThemes(themes);
    }

    selectTheme(themeId: string): void {
        if(document.body.className.indexOf('-theme') > 0){
            document.body.className = document.body.className.replace(/[\w^-]+-theme+/gi, themeId);
        } else {
            document.body.classList.add(themeId);
        }

        localStorage.setItem(LocalStorageKeys.theme, themeId);
        this.store.mutations.selectTheme(themeId);
    }
}