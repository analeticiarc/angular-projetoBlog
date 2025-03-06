import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContentComponent } from './pages/content/content.component';
import { NgModule } from '@angular/core';

export const appRoutes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },

  { 
    path: 'content/:id', 
    component: ContentComponent 
  }
];

