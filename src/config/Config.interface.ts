import {ItemsApiClientUrlsInterface} from "@/models/api-client/items";
import {ThemeInfoInterface} from "my-component-library";

export interface ConfigInterface {
    global: {},
    httpClient: {
        tokenKey: string,
    },
    apiClient: {
        type: string,
    },
    items: {
        apiUrls: ItemsApiClientUrlsInterface,
    },
    themes: ThemeInfoInterface[],
}