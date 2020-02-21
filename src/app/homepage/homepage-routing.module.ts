import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage.component';


const routes: Routes = [
  {
    path:"",
    component:HomepageComponent,
    children:[
      {
        path:'',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path:'about',
        loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
      },
      {
        path:'blog',
        loadChildren: () => import('./pages/blog/blog.module').then(m => m.BlogModule)
      },
      {
        path:'contact',
        loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
      },
      {
        path:'experience',
        loadChildren: () => import('./pages/experience/experience.module').then(m => m.ExperienceModule)
      },
      {
        path:'services',
        loadChildren: () => import('./pages/services/services.module').then(m => m.ServicesModule)
      },
      {
        path:'testimonials',
        loadChildren: () => import('./pages/testimonials/testimonials.module').then(m => m.TestimonialsModule)
      },
      {
        path:'work',
        loadChildren: () => import('./pages/work/work.module').then(m => m.WorkModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
