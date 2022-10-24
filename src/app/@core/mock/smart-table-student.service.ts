import { Injectable } from '@angular/core';
import { SmartTableStudentData } from '../data/smart-table-student';

@Injectable()
export class SmartTableStudentService extends SmartTableStudentData {

  data = [{
    id: 1,
    name: 'Mark',
    email: 'mdo@gmail.com',
    carrera:'IDGS',
    modalidad:'ESCOLARIZADA',
    campus:'TOLUCA',
    nivel:'7',
    grupo:'A',
  }, {
    id: 2,
    name: 'Jacob',
    email: 'fat@yandex.ru',
    carrera:'IDGS',
    modalidad:'ESCOLARIZADA',
    campus:'TOLUCA',
    nivel:'7',
    grupo:'A',
  }, {
    id: 3,
    name: 'Larry',
    email: 'twitter@outlook.com',
    carrera:'IDGS',
    modalidad:'ESCOLARIZADA',
    campus:'TOLUCA',
    nivel:'7',
    grupo:'A',
  } ];

  getData() {
    return this.data;
  }
}
