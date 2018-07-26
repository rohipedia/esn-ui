import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http" ;
import { Router } from "@angular/router";

@Injectable()
export class AuthService {

    isAdmin: boolean = true;

    constructor(private http: Http, private router: Router) {}

    signinUser(user) {
        /**to be removed */
        this.isAdmin = true;
        this.router.navigate(['/dashboard']);
        /**to be removed */

        // return this.http.post('/api/login', user)
        //     .subscribe((response: Response) => {
        //         this.isAdmin = response.json().isAdmin;
        //         this.router.navigate(['/dashboard']);
        //     })
    }
}