import {
    ItemsApiClientUrlsInterface,
    ItemsApiClientInterface,
    ItemsApiClientModel,
} from '@/models/api-client/items';
import {config} from "@/config";

const urls: ItemsApiClientUrlsInterface = config.items.apiUrls;
// instanciamos ItemsApiClient apuntando a la URL que devuelve datos estáticos
const itemsApiClient: ItemsApiClientInterface = new ItemsApiClientModel(urls)
// exportamos la instancia
export default itemsApiClient;