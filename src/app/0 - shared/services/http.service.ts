import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API } from 'aws-amplify';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  apiName: string;
  getInit: any;

  constructor(private http: HttpClient) {
    this.apiName = 'aouuser';
    this.getInit = {
      headers: {}, // OPTIONAL
      response: true, // OPTIONAL (return the entire Axios response object instead of only response.data)
      queryStringParameters: {
        name: 'param', // OPTIONAL
      },
    };
  }

  getLambda() {
    return API.get(this.apiName, '', this.getInit);
  }
}
