import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HttpService {

  constructor(private http: Http) { }

  get(url) {
    return this.http.get(url).toPromise().then( res => {
        console.log("res", res);
        return res.json();
      },
    ).catch( res => {
        return res;
      }
    );
  }

}
