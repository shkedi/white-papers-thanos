import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';
import { QuestionnaireComponent } from './questionnaire/questionnaire.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'questionnaire', component: QuestionnaireComponent },
  { path: '**', redirectTo: '' }
];
