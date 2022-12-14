import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { UEService } from './services/ue.service';
import { RoleService } from './services/role.service';
import { QuestionService } from './services/question.service';
import { ExamenService } from './services/examen.service';
import { CompteService } from './services/compte.service';
import { PersonneService } from './services/personne.service';
import { AcademieService } from './services/academie.service';
import { CentreDeRechercheService } from './services/centre-de-recherche.service';
import { ClasseService } from './services/classe.service';
import { CoursService } from './services/cours.service';
import { EvaluationService } from './services/evaluation.service';
import { FormationService } from './services/formation.service';
import { SectionService } from './services/section.service';
import { UniversiteService } from './services/universite.service';
import { EvalQuestComponent } from './pages/eval-quest/eval-quest.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { EditEvaluationComponent } from './pages/edit-evaluation/edit-evaluation.component';
import { EditCompteComponent } from './edit-compte/edit-compte.component';



@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AuthLayoutComponent,
    ProfilComponent,
    EditUserComponent,
    EditEvaluationComponent,
    EditCompteComponent
  ],
  providers: [UEService,RoleService,QuestionService,ExamenService,CompteService,PersonneService,
    AcademieService,CentreDeRechercheService,ClasseService,CoursService,EvaluationService,
    FormationService,SectionService,UniversiteService],
  bootstrap: [AppComponent]
})
export class AppModule { }

