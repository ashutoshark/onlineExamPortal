import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl1 from './helper';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  constructor(private _http: HttpClient) {}
  //load all the cateogries
  public categories() {
    return this._http.get(`${baseUrl1}/category/`);
  }

  //add new category
  public addCategory(category:any) {
    return this._http.post(`${baseUrl1}/category/`, category);
  }
}