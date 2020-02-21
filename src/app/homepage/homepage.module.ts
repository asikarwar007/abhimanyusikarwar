import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [HomepageComponent, HeaderComponent, FooterComponent],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
