import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import { CountriesManagementComponent } from './country-management/countries-management/countries-management.component';
import { CitiesManagementComponent } from './country-management/cities-management/cities-management.component'
const routes: Routes = [
    {
        path: 'layout',
        component: LayoutComponent,
        children: [
                { path: 'layout/dashboard',      component: DashboardComponent },
                { path: 'user-profile',   component: UserProfileComponent },
                { path: 'table-list',     component: TableListComponent },
                { path: 'typography',     component: TypographyComponent },
                { path: 'icons',          component: IconsComponent },
                { path: 'maps',           component: MapsComponent },
                { path: 'notifications',  component: NotificationsComponent },
                { path: 'upgrade',        component: UpgradeComponent },
                { path: 'CountriesManagement',        component: CountriesManagementComponent },
                { path: 'CitiesManagement',        component: CitiesManagementComponent },
                { path: '',               redirectTo: 'layout/dashboard', pathMatch: 'full' }
            
        ]
    }
];

// const routes: Routes = [
//     {
//         path: '',
//         component: LayoutComponent,
//         children: [
//             { path: '', redirectTo: 'dashboard' },
//             { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
//             { path: 'countries', loadChildren: './countries/countries.module#CountriesModule' },
//             { path: 'cities', loadChildren: './cities/cities.module#CitiesModule' },
//             { path: 'universities', loadChildren: './universities/universities.module#UniversitiesModule' },
//             { path: 'hobbies', loadChildren: './hobbies-icons/hobbies-icons.module#HobbiesIconsModule' },
//             { path: 'introductrory', loadChildren: './introductory-content/introductory-content.module#IntroductoryContentModule' },
//             { path: 'videocontent', loadChildren: './videos-content/videos-content.module#VideosContentModule' },
//             { path: 'aboutus', loadChildren: './about-us/about-us.module#AboutUsModule' },
//             { path: 'contactus', loadChildren: './contact-us/contact-us.module#ContactUsModule' },
//             { path: 'faq', loadChildren: './faq/faq.module#FaqModule' },
//             { path: 'user', loadChildren: './user-list/user-list.module#UserListModule' },
//             { path: 'userDetail/:id', loadChildren: './userdetail/userdetail.module#UserdetailModule' },
//             { path: 'notification', loadChildren: './notification/notification.module#NotificationModule' },
//             { path: 'chatroom', loadChildren: './chat-room/chat-room.module#ChatRoomModule' },
//             { path: 'chat', loadChildren: './chat/chat.module#ChatModule' },
//             { path: 'chat/:id', loadChildren: './chat/chat.module#ChatModule' },
//             { path: 'event', loadChildren: './events-list/events-list.module#EventsListModule' },
//             { path: 'eventsDetail/:id', loadChildren: './events-details/events-details.module#EventsDetailsModule' },
            
//         ]
//     }
// ];
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { UserProfileComponent } from './user-profile/user-profile.component';
// import { TableListComponent } from './table-list/table-list.component';
// import { TypographyComponent } from './typography/typography.component';
// import { IconsComponent } from './icons/icons.component';
// import { MapsComponent } from './maps/maps.component';
// import { NotificationsComponent } from './notifications/notifications.component';
// import { UpgradeComponent } from './upgrade/upgrade.component';

// const routes: Routes =[
//     { path: 'dashboard',      component: DashboardComponent },
//     { path: 'user-profile',   component: UserProfileComponent },
//     { path: 'table-list',     component: TableListComponent },
//     { path: 'typography',     component: TypographyComponent },
//     { path: 'icons',          component: IconsComponent },
//     { path: 'maps',           component: MapsComponent },
//     { path: 'notifications',  component: NotificationsComponent },
//     { path: 'upgrade',        component: UpgradeComponent },
//     { path: '',               redirectTo: 'dashboard', pathMatch: 'full' }
// ];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
