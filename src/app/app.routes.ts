// import { NgModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';
// import { IncioComponent } from './pages/incio/incio.component';
import { AcercadeComponent } from './pages/acercade/acercade.component';
import { Router } from 'express';
import { IncioComponent } from './pages/incio/incio.component';

//export const routes: Routes = [];

export const routes: Routes = [
    //{ path: '', redirectTo: '/inicio', pathMatch: 'full' },
    { path: 'inicio', component: IncioComponent },
    { path: 'acercade', component: AcercadeComponent }
    
  ];
  