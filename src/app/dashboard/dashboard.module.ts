import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { LayoutComponent } from './layout/layout.component';
import { CgmComponent } from './cgm/cgm.component';
import { ScmComponent } from './scm/scm.component';
import { CabinetSizingComponent } from './cabinet-sizing/cabinet-sizing.component';
import { AppServiceService } from '../http-services/app-service.service';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModal, ModalDismissReasons,NgbActiveModal  } from '@ng-bootstrap/ng-bootstrap';
import { DisableInputDirective } from './disable-input.directive';


@NgModule({
  declarations: [
    DashboardComponent,
    DashboardViewComponent,
    SideNavComponent,
    LayoutComponent,
    CgmComponent,
    ScmComponent,
    CabinetSizingComponent,
    AddComponent,
    DisableInputDirective
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[AppServiceService,NgbActiveModal]
})
export class DashboardModule { }
