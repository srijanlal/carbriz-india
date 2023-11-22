import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  constructor() { }

  url : string =  'http://localhost:3000';

}