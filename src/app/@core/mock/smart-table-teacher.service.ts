import { Injectable } from '@angular/core';
import { SmartTableTeacherData } from '../data/smart-table-teacher';

@Injectable()
export class SmartTableTeacherService extends SmartTableTeacherData {

  data = [{
    id: 1,
    name: 'Mark',
    carrera: 'Otto',
    email: 'mdo@gmail.com',
  }, {
    id: 2,
    name: 'Jacob',
    carrera: 'Thornton',
    email: 'fat@yandex.ru',
  }, {
    id: 3,
    Name: 'Larry',
    carrera: 'Bird',
    email: 'twitter@outlook.com',
  } ];

  getData() {
    return this.data;
  }
}
