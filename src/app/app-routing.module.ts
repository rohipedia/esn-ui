import { DashboardComponent } from './esn-data/dashboard/dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SigninComponent } from "./auth/signin/signin.component";
import { EsnDataService } from './esn-data/esn-data.service';

const appRoutes: Routes = [
    { path: '', component: SigninComponent, pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent, resolve: {data: EsnDataService} }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}