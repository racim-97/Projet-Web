import { Injectable } from "@angular/core";
import { Subject, Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class AppService {
  signup(user: any) {
    const headers = new HttpHeaders({ "Content-Type": "application/json" });
    const options = { headers };
    return this.http.post(this.signupUrl, { user }, options).pipe(
      map((response: Response) => response),
      catchError(err => {
        console.log(err);
        return of([]);
      })
    );
  }
}
