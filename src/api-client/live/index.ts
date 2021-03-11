import { ApiClientInterface } from '@/models/api-client/ApiClient.interface'
import itemsApiClient from './items'
// creamos una instancia del cliente ApiClient principal que envuelve todos los clientes simulados
const apiLiveClient: ApiClientInterface = {
    items: itemsApiClient
}
// exportamos la instancia
export default apiLiveClient