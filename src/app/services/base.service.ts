import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class BaseService {
  BaseAPIConfig: any;
  apiController: string;
  constructor() {
    this.apiController = '';
    this.BaseAPIConfig = axios.create({
      baseURL: "http://localhost:3000/"
    });
  }
  add(body: any): any {
    return this.BaseAPIConfig.post(`${this.apiController}`, body);
  }

  update(id:string,body: any) {
    return this.BaseAPIConfig.put(`${this.apiController}/${id}`, body);
  }

  delete(id: string) {
    return this.BaseAPIConfig.delete(`${this.apiController}/${id}`);
  }

  getById(id: string) {
    return this.BaseAPIConfig.get(`${this.apiController}/${id}`);
  }

  getList() {
    return this.BaseAPIConfig.get(`${this.apiController}`);
  }

}
