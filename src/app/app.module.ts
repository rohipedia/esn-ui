import { EsnDataService } from './esn-data/esn-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/header/header.component';
import { AuthModule } from './auth/auth.module';
import { DashboardComponent } from './esn-data/dashboard/dashboard.component';
import { AdminPanelComponent } from './esn-data/dashboard/admin-panel/admin-panel.component';
import { SelfDetailsComponent } from './user/self-details/self-details.component';
import { ClaimEsnInputComponent } from './esn-data/dashboard/claim-esn-input/claim-esn-input.component';
import { EsnGridComponent } from './esn-data/dashboard/esn-grid/esn-grid.component';
import { GridFeaturesComponent } from './grid-features/grid-features.component';
import { GridTopComponent } from './grid-features/grid-top/grid-top.component';
import { GridBottomComponent } from './grid-features/grid-bottom/grid-bottom.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    AdminPanelComponent,
    SelfDetailsComponent,
    ClaimEsnInputComponent,
    EsnGridComponent,
    GridFeaturesComponent,
    GridTopComponent,
    GridBottomComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule
  ],
  providers: [
    EsnDataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
