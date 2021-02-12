import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzAlertModule} from 'ng-zorro-antd/alert';
import { NzTagModule} from 'ng-zorro-antd/tag';
import { NzCardModule} from 'ng-zorro-antd/card';
import { NzButtonModule} from 'ng-zorro-antd/button';

import { ViewGridModule } from '../view-grid/view-grid.module';
import { TaskComponent } from './task.component';
import { CustomEmptyModule } from '../custom-empty/custom-empty.module';

@NgModule({
  declarations: [
    TaskComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzTableModule,
    NzCardModule,
    NzTagModule,
    NzAlertModule,
    ViewGridModule,
    CustomEmptyModule
  ],
  exports: [
    TaskComponent
  ]
})
export class TaskModule { }
