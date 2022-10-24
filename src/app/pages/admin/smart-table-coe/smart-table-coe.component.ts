import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableCoeData } from '../../../@core/data/smart-table-coe';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table-coe.component.html',
  styleUrls: ['./smart-table-coe.component.scss'],
})
export class SmartTableCoeComponent {

  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
 

    columns: {
      evaluado: {
        title: 'Evaluado',
        type: 'string',
      },
      cri1: {
        title: 'Criterio 1',
        type: 'string',
      },
      cri2: {
        title: 'Criterio 2',
        type: 'string',
      },
      cri3: {
        title: 'Criterio 3',
        type: 'string',
      },
      cri4: {
        title: 'Criterio 4',
        type: 'string',
      },
      cri5: {
        title: 'Criterio 5',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableCoeData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
