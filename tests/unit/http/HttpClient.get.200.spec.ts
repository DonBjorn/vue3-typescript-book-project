import {HttpClient, HttpRequestParamsInterface} from "@/http-client";
import axios, {AxiosRequestConfig} from "axios";
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
            statusCode: 200,
            statusText: 'Success',
            requestConfig: mockedRequestConfig,
            data: 'get completed',
            reject: false,
        });

        sinon
            .stub(axios, 'get')
            .withArgs(mockParams.url, mockedRequestConfig)
            .returns(mockedPromise);
    });
    after(() => {
        sinon.restore();
    });

    it('Estado "Success" y retorna data', (done)=>{
        HttpClient
            .get<string> (mockParams)
            .then((response: string) => {
                expect(response).to.equal('get completed');
                done();
            })
    });
});
