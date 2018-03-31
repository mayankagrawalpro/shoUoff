import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ComponentsModule } from '../components/components.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { UsersListComponent } from './users-list/users-list.component';
import { CountriesManagementComponent } from './country-management/countries-management/countries-management.component';
import { CitiesManagementComponent } from './country-management/cities-management/cities-management.component'

import { AdminService } from '../services/admin/admin.service';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule }  from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { NgxPaginationModule } from 'ngx-pagination'; 
import { MatSelectModule } from '@angular/material/select';

@NgModule({
    imports: [
        CommonModule,
        LayoutRoutingModule,
        ComponentsModule,
        MatSlideToggleModule,
        MatInputModule,
        FormsModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        NgxPaginationModule,
        MatSelectModule
    ],
    declarations: [
        LayoutComponent,
        DashboardComponent,
    	UserProfileComponent,
    	TableListComponent,
    	TypographyComponent,
    	IconsComponent,
    	MapsComponent,
    	NotificationsComponent,
    	UpgradeComponent,
        UsersListComponent,
        CountriesManagementComponent,
        CitiesManagementComponent
    ],
    providers:[AdminService]
})
export class LayoutModule {}
