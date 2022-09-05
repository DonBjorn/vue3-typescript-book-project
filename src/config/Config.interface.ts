import {ItemsApiClientUrlsInterface} from "@/models/api-client/items";
import {ThemeInfoInterface} from "@/components-standalone";

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