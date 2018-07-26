import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class EsnDataService implements Resolve<any> {

  constructor(private http: Http) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
    const promise = new Promise((resolve, reject) => {
      this.http.get('assets/esn-temp.json')
        .subscribe((response: Response) => {
          resolve(response.json().dataObj);
        });
    })
    return promise;
  }
}
