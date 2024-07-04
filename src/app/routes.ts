import { Routes } from '@angular/router';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { IncioComponent } from './pages/incio/incio.component';
import { ListapacienteComponent } from './listapaciente/ListapacienteComponent';
import { AgregarpacienteComponent } from './agregarpaciente/AgregarpacienteComponent.1';


//export const routes: Routes = [];

export const routes: Routes = [
  //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
  { path: 'inicio', component: IncioComponent },
  { path: 'acercade', component: AcercadeComponent },
  {path:'listapaciente',component:ListapacienteComponent},
  {path:'addpaciente',component:AgregarpacienteComponent},
  {path:'**',component:ListapacienteComponent},
];