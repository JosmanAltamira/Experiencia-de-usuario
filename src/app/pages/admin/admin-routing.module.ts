import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TablesComponent } from './admin.component';
import { SmartTableManagerComponent } from './smart-table-manager/smart-table-manager.component';
import { SmartTableTeacherComponent } from './smart-table-teacher/smart-table-teacher.component';
import { SmartTableStudentComponent } from './smart-table-student/smart-table-student.component';

import { TreeGridComponent } from './tree-grid/tree-grid.component';

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
      path: 'tree-grid',
      component: TreeGridComponent,
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
  TreeGridComponent,
];
