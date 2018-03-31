import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
 
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';
import { ENV } from '../../env';//environment file imported
import 'rxjs/add/operator/map';
import 'rxjs/Rx';


  const httpOptions = {
     headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

@Injectable()
export class AdminService {
  constructor(private http: HttpClient) { }

    AppUsersList(): Observable<any> {
        const url = `${ENV.mainApi}appUsersList`;
        return this.http.get<any>(url,httpOptions)
            .pipe(
            tap(heroes => this.log(`get   appUsersList Test`)),
            catchError(this.handleError('get   appUsersList Test', []))
        );
    }

    EditUserStatus(data): Observable<any> {
        const url = `${ENV.mainApi}edit_status`;
        return this.http.post<any>(url,data,httpOptions)
        .pipe(
            tap(heroes => this.log(`post   edit_status Test`)),
            catchError(this.handleError('post   edit_status Test', []))
        );
    }

    // ----21-3-2018--mukul---
    // --------------------------to fetch coutries list---------------------------
    fetchCoutriesList(){
        const url = `${ENV.mainApi}listCountry`;
        return this.http.get<any>(url,httpOptions)
            .pipe(
            tap(heroes => this.log(`get   listCountry Test`)),
            catchError(this.handleError('get   listCountry Test', []))
        );
    }

    // -------------------------to add country-----------------------------
    addCountry(data): Observable<any> {
        const url = `${ENV.mainApi}addCountry`;
        return this.http.post<any>(url,data,httpOptions)
        .pipe(
            tap(heroes => this.log(`post   addCountry Test`)),
            catchError(this.handleError('post   addCountry Test', []))
        );
    }

    // --------------------------to edit country details-------------------
    editCountryDetails(data): Observable<any> {
        const url = `${ENV.mainApi}editCountry`;
        return this.http.post<any>(url,data,httpOptions)
        .pipe(
            tap(heroes => this.log(`post   editCountry Test`)),
            catchError(this.handleError('post   editCountry Test', []))
        );
    }

    // --------------------to delete country----------

    deleteCountry(countryId){
        const url = `${ENV.mainApi}deleteCountry/${countryId}`;
        return this.http.get<any>(url,httpOptions)
            .pipe(
            tap(heroes => this.log(`get   deleteCountry Test`)),
            catchError(this.handleError('get   deleteCountry Test', []))
        );
    }

    // ----------------------to fetch cities list---------------
    fetchCitiesList(){
        const url = `${ENV.mainApi}listCity`;
        return this.http.get<any>(url,httpOptions)
            .pipe(
            tap(heroes => this.log(`get   listCity Test`)),
            catchError(this.handleError('get   listCity Test', []))
        );
    }

    // -------------------------to add city-----------------------------
    addCity(data): Observable<any> {
        const url = `${ENV.mainApi}addCity`;
        return this.http.post<any>(url,data,httpOptions)
        .pipe(
            tap(heroes => this.log(`post   addCity Test`)),
            catchError(this.handleError('post   addCity Test', []))
        );
    }

    // -----------------------to edit city-------------------------------
    editCityDetails(data): Observable<any> {
        const url = `${ENV.mainApi}editCity`;
        return this.http.post<any>(url,data,httpOptions)
        .pipe(
            tap(heroes => this.log(`post   editCity Test`)),
            catchError(this.handleError('post   editCity Test', []))
        );
    }

    // --------------------to delete city----------
    deleteCity(cityId){
        const url = `${ENV.mainApi}deleteCity/${cityId}`;
        return this.http.get<any>(url,httpOptions)
            .pipe(
            tap(heroes => this.log(`get   deleteCity Test`)),
            catchError(this.handleError('get   deleteCity Test', []))
        );
    }

    // ------------------to delete user---------------

    deleteUser(userId){
        const url = `${ENV.mainApi}deleteUser/${userId}`;
        return this.http.get<any>(url,httpOptions)
            .pipe(
            tap(heroes => this.log(`get   deleteUser Test`)),
            catchError(this.handleError('get   deleteUser Test', []))
        );
    }

      // ------------------to admin login---------------
     
        AdminLogin(data): Observable<any> {
            const url = `${ENV.mainApi}adminLogin`;
            return this.http.post<any>(url,data,httpOptions)
                .pipe(
                tap(heroes => this.log(`post   adminLogin Test`)),
                catchError(this.handleError('post   errorAdminLogin Test', []))
            );
        }

      // ------------------to admin forget password---------------
     
        ForgetAdmin_password(email): Observable<any> {
            const url = `${ENV.mainApi}ForgetAdmin_password/${email}`;
            return this.http.get<any>(url,httpOptions)
                .pipe(
                tap(heroes => this.log(`get   ForgetAdmin_password Test`)),
                catchError(this.handleError('get   Error_ForgetAdmin_password Test', []))
            );
        }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
 
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    // this.messageService.add('HeroService: ' + message);
    console.log(message)
  }


  ////////////////////(harman)////////////////////////////
  ////////// 10 feb Login //////////////////////////////



}
