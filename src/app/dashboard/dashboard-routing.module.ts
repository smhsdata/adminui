import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetSizingComponent } from './cabinet-sizing/cabinet-sizing.component';
import { CgmComponent } from './cgm/cgm.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DashboardComponent } from './dashboard.component';
import { LayoutComponent } from './layout/layout.component';
import { ScmComponent } from './scm/scm.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent, children:
      [{ path: '', component: LayoutComponent },
        {path: 'layout', component: LayoutComponent},
        {path: 'cgm', component: CgmComponent},
        {path: 'scm', component: ScmComponent},
        {path: 'cabinet-sizing', component: CabinetSizingComponent}
      ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
