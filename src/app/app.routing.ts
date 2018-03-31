import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { UserProfileComponent } from './layout/user-profile/user-profile.component';
import { TableListComponent } from './layout/table-list/table-list.component';
import { TypographyComponent } from './layout/typography/typography.component';
import { IconsComponent } from './layout/icons/icons.component';
import { MapsComponent } from './layout/maps/maps.component';
import { NotificationsComponent } from './layout/notifications/notifications.component';
import { UpgradeComponent } from './layout/upgrade/upgrade.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import {LoginComponent} from './authentications/login/login.component'
import { UsersListComponent } from './layout/users-list/users-list.component';


const routes: Routes =[
                { path: 'layout',      component: LayoutComponent,
                   children: [
                             { path: 'dashboard',      component: DashboardComponent },
                              { path: 'userList',   component: UsersListComponent },
                              { path: 'user-profile',   component: UserProfileComponent },
                              { path: 'table-list',     component: TableListComponent },
                              { path: 'typography',     component: TypographyComponent },
                              { path: 'icons',          component: IconsComponent },
                              { path: 'maps',           component: MapsComponent },
                              { path: 'notifications',  component: NotificationsComponent },
                              { path: 'upgrade',        component: UpgradeComponent },
                              { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
                          
                    ] 
            
         },
    { path: 'login',      component: LoginComponent},
    { path: '',               redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
