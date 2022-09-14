import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { EvalQuestComponent } from 'src/app/pages/eval-quest/eval-quest.component';
import { ProfilComponent } from 'src/app/pages/profil/profil.component';
import { EditEvaluationComponent } from 'src/app/pages/edit-evaluation/edit-evaluation.component';
import { EditUserComponent } from 'src/app/edit-user/edit-user.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard',      component: DashboardComponent },
    { path: 'espace-compte',   component: UserProfileComponent },
    { path: 'espace-cours',         component: TablesComponent },
    { path: 'espace-enseignant',          component: IconsComponent },
    { path: 'maps',           component: MapsComponent },
    { path: 'contacts',          component: LoginComponent },
    { path: 'evaluation-question',  component:EvalQuestComponent},
    { path: 'mon-profil',  component:ProfilComponent},
    { path: 'edit-evaluation/:id',  component:EditEvaluationComponent},
    { path: 'editUser/:id', component: EditUserComponent}
];
