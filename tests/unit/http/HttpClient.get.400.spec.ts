import {HttpClient, HttpRequestParamsInterface} from "@/http-client";
import axios, {AxiosRequestConfig, AxiosResponse} from "axios";
import {MockedPromiseFactory} from "./MockedPromiseFactory";
import sinon from 'sinon';
import { expect } from 'chai';

const mockParams: HttpRequestParamsInterface = {
    url: 'path/to/a/get/api/endpoint',
    requiresToken: false,
}

describe('HttpClient.get', () => {
    before(() => {
        const mockedRequestConfig = {headers: {}} as AxiosRequestConfig;

        const mockedPromise = MockedPromiseFactory({
            url: mockParams.url,
            statusCode: 400,
            statusText: 'Success',
            requestConfig: mockedRequestConfig,
            data: 'get completed',
            reject: true,
        });

        sinon
            .stub(axios, 'get')
            .withArgs(mockParams.url, mockedRequestConfig)
            .returns(mockedPromise);
    });
    after(() => {
        sinon.restore();
    });

    it('Estado "Reject" y retorna 400', (done)=>{
        HttpClient
            .get<string> (mockParams)
            .then((response: string) => {})
            .catch((response: AxiosResponse) => {
                expect(response.status).to.equal(400);
                done();
            })
    });
});
