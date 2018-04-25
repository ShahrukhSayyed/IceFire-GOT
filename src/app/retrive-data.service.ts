import { Injectable } from '@angular/core';

//Added for Http and Observables
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()
export class RetriveDataService {
  public baseUrl = "https://anapioficeandfire.com/api/";

  constructor(private _http: HttpClient) {
    console.log("RetriveDataService is called");
  }


  //method to handle http calls
  private handleError (err : HttpErrorResponse){
    console.log("Handle error HTTP calls");
    console.log(err.message);
    return Observable.throw(err.message);
  }

  //method to get all books
  public getBooks = (): any => {
    let response = this._http.get(`${this.baseUrl}/books/`);
    return response;
  }
  //method to get all houses
  public getHouses = (): any => {
    let response = this._http.get(`${this.baseUrl}/houses/`);
    return response;
  }


  //method to get all characters

  public getCharacters = (): any => {
    let response = this._http.get(`${this.baseUrl}/characters/`);
    return response;
  }

  //method to get specific category for single page view
  public getSingleItem = (entityName, id): any => {
    let response = this._http.get(`${this.baseUrl}/${entityName}/${id}`);
    return response;
  }


}
