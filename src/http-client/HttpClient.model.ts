import {HttpClientInterface} from "@/http-client/HttpClient.interface";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {HttpRequestParamsInterface} from "@/http-client/HttpRequestParams.interface";
import {config} from "@/config";

export class HttpClientModel implements HttpClientInterface{
    private getToken() : string {
        const TOKEN_KEY = config.httpClient.tokenKey || 'my-app-token';
        return localStorage.getItem(TOKEN_KEY) || '';
    }

    constructor() {
        // OPCIONAL: Añadir un interceptor de peticiones para manejar desde un unico lugar errores
        // y otras cosas para cada petición
    }

    get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
        return new Promise<T>(((resolve, reject) => {
            const { url, requiresToken } = parameters;
            const options : AxiosRequestConfig = {headers: {}};

            if (requiresToken){
                options.headers.RequestVerificationToken = this.getToken();
            }

            axios
                .get(url, options)
                .then((response: AxiosResponse) => {
                    resolve(response.data as T);
                })
                .catch((response: AxiosResponse) => {
                    console.info('---Rechazando---');
                    reject(response);
                })
        }));
    }

    post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
        return new Promise<T>(((resolve, reject) => {
            const { url, requiresToken, payload } = parameters;
            const options : AxiosRequestConfig = {
                headers: {}
            }

            if (requiresToken){
                options.headers.RequestVerificationToken = this.getToken();
            }

            axios
                .post(url, payload, options)
                .then((response: AxiosResponse) => {
                    resolve(response.data as T);
                })
                .catch((response: AxiosResponse) => {
                    console.info('---Rechazando---');
                    reject(response);
                })
        }));
    }
}
