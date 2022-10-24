import { Injectable } from '@angular/core';
import { SmartTableCoeData } from '../data/smart-table-coe';

@Injectable()
export class SmartTableCoeService extends SmartTableCoeData {

  data = [

  {
    id: 1,
    evaluado: 'evaluado1',
    cri1: '1',
    cri2: '1',
    cri3: '1',
    cri4: '1',
    cri5: '1',
  },
  {
    id: 2,
    evaluado: 'Evaluado2',
    cri1: '1',
    cri2: '1',
    cri3: '1',
    cri4: '1',
    cri5: '1',
  },
  {
    id: 3,
    evaluado: 'Evaluado3',
    cri1: '1',
    cri2: '1',
    cri3: '1',
    cri4: '1',
    cri5: '1',
  },

];

  getData() {
    return this.data;
  }
}
