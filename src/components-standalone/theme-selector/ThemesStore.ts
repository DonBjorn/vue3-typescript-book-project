import {reactive} from 'vue'
import {ThemeInfoInterface} from './models'
import {StateInterface, StoreInterface, StoreModel} from './store-models'

const availableThemes: ThemeInfoInterface[] = []

export const themesState: StateInterface = reactive({themes: availableThemes})

export const Store: StoreInterface = new StoreModel(themesState)