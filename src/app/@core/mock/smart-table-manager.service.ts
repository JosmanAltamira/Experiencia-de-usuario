import { Injectable } from '@angular/core';
import { SmartTableManagerData } from '../data/smart-table-manager';

@Injectable()
export class SmartTableManagerService extends SmartTableManagerData {

  data = [

  {
    id: 1,
    Name: 'Larry',
    carrera: 'Bird',
    email: 'twitter@outlook.com',
  },
  {
    id: 2,
    Name: 'Larry',
    carrera: 'Bird',
    email: 'twitter@outlook.com',
  },
  {
    id: 2,
    Name: 'Larry',
    carrera: 'Bird',
    email: 'twitter@outlook.com',
  } ,
  {
    id: 3,
    Name: 'Larry',
    carrera: 'Bird',
    email: 'twitter@outlook.com',
  }
];

  getData() {
    return this.data;
  }
}
