import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzIconModule} from 'ng-zorro-antd/icon';
import { NzDropDownModule} from 'ng-zorro-antd/dropdown';
import { NzDividerModule} from 'ng-zorro-antd/divider';
import { NzMenuModule} from 'ng-zorro-antd/menu';
import { NzButtonModule} from 'ng-zorro-antd/button';

import { BusinessToolBtnComponent } from './business-tool-btn/business-tool-btn.component';
import { BusinessRowBtnComponent } from './business-row-btn/business-row-btn.component';
import { BusinessRowDropdownBtnComponent } from './business-row-dropdown-btn/business-row-dropdown-btn.component';
import { ExpressionExePipeModule } from '../custom-pipe/expression-exe-pipe/expression-exe-pipe.module';
import { BusinessBaseBtnComponent } from './business-base-btn/business-base-btn.component';

@NgModule({
  declarations: [
    BusinessToolBtnComponent,
    BusinessRowBtnComponent,
    BusinessRowDropdownBtnComponent,
    BusinessBaseBtnComponent
  ],
  imports: [
    CommonModule,
    NzButtonModule,
    NzDividerModule,
    NzIconModule,
    NzDropDownModule,
    NzMenuModule,
    ExpressionExePipeModule
  ],
  exports: [
    BusinessToolBtnComponent,
    BusinessRowBtnComponent,
    BusinessRowDropdownBtnComponent,
    BusinessBaseBtnComponent
  ]
})
export class BusinessBtnModule { }
