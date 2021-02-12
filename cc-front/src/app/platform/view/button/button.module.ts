import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { NzInputNumberModule} from 'ng-zorro-antd/input-number';
import { NzPopoverModule} from 'ng-zorro-antd/popover';
import { NzFormModule} from 'ng-zorro-antd/form';
import { NzInputModule} from 'ng-zorro-antd/input';
import { NzTableModule} from 'ng-zorro-antd/table';
import { NzSelectModule} from 'ng-zorro-antd/select';
import { NzButtonModule} from 'ng-zorro-antd/button';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './button.component';
import { ButtonListComponent } from './button-list/button-list.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { ButtonViewComponent } from './button-view/button-view.component';
import { ViewGridModule } from '@platform/shared/view-grid/view-grid.module';
import { BusinessBtnModule } from '@platform/shared/business-btn/business-btn.module';
import { PageToolModule } from '@platform/shared/page-tool/page-tool.module';
import { DataDicPipeModule } from '@platform/shared/custom-pipe/data-dic-pipe/data-dic-pipe.module';

const routes: Routes = [
  {
    path: '',
    component: ButtonComponent,
    children: [
      {
        path: 'buttonList',
        component: ButtonListComponent,
        data: { title: '按钮管理' }
      },
      {
        path: 'buttonAdd',
        component: ButtonAddComponent,
        data: { title: '按钮添加' }
      },
      {
        path: 'buttonEdit',
        component: ButtonAddComponent,
        data: { title: '按钮编辑' }
      },
      {
        path: 'buttonView',
        component: ButtonViewComponent,
        data: { title: '按钮查看' }
      }
    ]
  }
];

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonListComponent,
    ButtonAddComponent,
    ButtonViewComponent
  ],
  imports: [
    CommonModule,
    NzTableModule,
    NzIconModule,
    NzButtonModule,
    NzInputNumberModule,
    NzPopoverModule,
    NzFormModule,
    NzSelectModule,
    NzInputModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ViewGridModule,
    BusinessBtnModule,
    PageToolModule,
    DataDicPipeModule,
    RouterModule.forChild(routes)
  ]
})
export class ButtonModule { }
