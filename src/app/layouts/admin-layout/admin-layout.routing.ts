import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { LoginComponent } from 'src/app/pages/login/login.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'espace-compte',   component: UserProfileComponent },
    { path: 'espace-cours',         component: TablesComponent },
    { path: 'espace-enseignant',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'contacts',          component: LoginComponent }
];
