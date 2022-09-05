import {ThemeInfoInterface} from "../models";
import {StateInterface} from "../store-models";

export interface MutationsInterface {
    loadThemes(themes: ThemeInfoInterface[]): void;
    selectTheme(themeId: string): void;
}

export class MutationsModel implements MutationsInterface{
    private state!: StateInterface;

    constructor(state: StateInterface) {
        this.state = state;
    }

    loadThemes(themes: ThemeInfoInterface[]): void {
        this.state.themes = themes;
    }

    selectTheme(themeId: string): void {
        this.state.themes.forEach((theme) => {
            theme.selected = theme.id === themeId;
        });
    }
}
