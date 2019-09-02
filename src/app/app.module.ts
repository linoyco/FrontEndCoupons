import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AdminComponent } from './components/admin/admin.component';
import { CompanyComponent } from './components/company/company.component';
import { CustomerComponent } from './components/customer/customer.component';
import { LoginPageComponent } from './components/login-page/login-page.component';

@NgModule({
  declarations: [ HomePageComponent, AdminComponent, CompanyComponent, CustomerComponent, LoginPageComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [HomePageComponent]
})
export class AppModule { }
