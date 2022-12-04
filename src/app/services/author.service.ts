import { Injectable } from '@angular/core';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthorService extends BaseService {

  constructor() {
    super();
    this.apiController = 'posts';
  }

  getLogOfItem(itemId: string) {
    return this.BaseAPIConfig.get(`${this.apiController}/${itemId}`);
  }
}
