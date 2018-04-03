import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { MatInputModule,MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app.routing';
import {AppProvider} from './services/app.provider'



import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import {LayoutModule}  from './layout/layout.module'
import {LoginComponent,Confirmation} from './authentications/login/login.component';
import { ConfirmationDialogComponent } from './alerts/confirmation-dialog/confirmation-dialog.component';
// import { CountriesManagementComponent } from './country-management/countries-management/countries-management.component';
// import { CitiesManagementComponent } from './country-management/cities-management/cities-management.component'
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    Confirmation,
    ConfirmationDialogComponent,
    // CountriesManagementComponent,
    // CitiesManagementComponent
    // LayoutComponent
    // DashboardComponent,
    // UserProfileComponent,
    // TableListComponent,
    // TypographyComponent,
    // IconsComponent,
    // MapsComponent,
    // NotificationsComponent,
    // UpgradeComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MatInputModule,
    MatDialogModule,
  RouterModule,
    AppRoutingModule,
    LayoutModule,
    BrowserModule,
BrowserAnimationsModule,
HttpClientModule,
  ],
  providers: [AppProvider],
  bootstrap: [AppComponent],
  entryComponents:[ConfirmationDialogComponent,Confirmation]
})
export class AppModule { }
