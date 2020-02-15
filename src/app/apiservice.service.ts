import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http' ;
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

  constructor(private _Http:HttpClient) { 
  }

  getPosts():Observable<any>{
   return this._Http.get("https://jsonplaceholder.typicode.com/posts");
  }

  getUsers():Observable<any>{
    return this._Http.get("https://jsonplaceholder.typicode.com/users");
   }

   getComments():Observable<any>{
    return this._Http.get("https://jsonplaceholder.typicode.com/comments");
   }

   getPhotos():Observable<any>{
    return this._Http.get("https://jsonplaceholder.typicode.com/photos");
   }
}
