import { Component } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';

import { SmartTableStudentData } from '../../../@core/data/smart-table-student';

@Component({
  selector: 'ngx-smart-table',
  templateUrl: './smart-table-student.component.html',
  styleUrls: ['./smart-table-student.component.scss'],
})
export class SmartTableStudentComponent {

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
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'nombre',
        type: 'string',
      },
      email: {
        title: 'correo',
        type: 'string',
      },
      carrera: {
        title: 'carrera',
        type: 'string',
      },
      modalidad: {
        title: 'modalidad',
        type: 'string',
    },
    campus: {
      title: 'campus',
      type: 'string',
    },
    nivel: {
      title: 'nivel',
      type: 'string',
    },
    grupo: {
      title: 'grupo',
      type: 'string',
    },
  },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private service: SmartTableStudentData) {
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
