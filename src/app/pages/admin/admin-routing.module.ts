import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './admin.component';
import { SmartTableManagerComponent } from './smart-table-manager/smart-table-manager.component';
import { SmartTableTeacherComponent } from './smart-table-teacher/smart-table-teacher.component';
import { SmartTableStudentComponent } from './smart-table-student/smart-table-student.component';
import { SmartTableCoeComponent } from './smart-table-coe/smart-table-coe.component';

import { CargaMasivaComponent } from './carga-masiva/carga-masiva.component';

const routes: Routes = [{
  path: '',
  component: TablesComponent,
  children: [
    {
      path: 'smart-table-manager',
      component: SmartTableManagerComponent,
    },
    {
      path: 'smart-table-teacher',
      component: SmartTableTeacherComponent,
    },
    {
      path: 'smart-table-student',
      component: SmartTableStudentComponent,
    },
    {
      path: 'smart-table-coe',
      component: SmartTableCoeComponent,
    },
    {
      path: 'carga-masiva',
      component: CargaMasivaComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TablesRoutingModule { }

export const routedComponents = [
  TablesComponent,
  SmartTableManagerComponent,
  SmartTableTeacherComponent,
  SmartTableStudentComponent,
  SmartTableCoeComponent,
  CargaMasivaComponent,
];
