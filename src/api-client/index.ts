import {config} from "@/config";
import {ApiClientInterface} from '@/models/api-client/ApiClient.interface';
import apiMockClient from './mock';
import apiLiveClient from './live';

let apiClient: ApiClientInterface;

switch (config.apiClient.type) {
    case 'live':
        apiClient = apiLiveClient;
        break;
    case 'mock':
        apiClient = apiMockClient;
        break;
    default:
        throw Error('Invalid or undefined config.apiClient.type');
}

export default apiClient;