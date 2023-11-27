import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseUrlService {

  constructor() { }

  url : string =  'https://rest.carbriz.com';

}