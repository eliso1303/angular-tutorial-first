import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductlistComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { HttpClientModule } from '@angular/common/http';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { signUpComponent } from './user-form/signUp.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { AdminComponent } from './admin/admin.component';
import { GuardComponent } from './guard/guard.component';
import { AdminGuard } from './admin.guard';
import { LoginComponent } from './login/login.component';
import { UsersComponent } from './users/users.component';
import { formsComponent } from './forms/forms.component';
import { LoginGuard } from './login.guard';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeRegisterComponent } from './employee-register/employee-register.component';
import { EmployeeComponent } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductlistComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    WishlistComponent,
    signUpComponent,
    CurrencyComponent,
    ExchangeComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
    BreadcrumbsComponent,
    AdminComponent,
    GuardComponent,
    UsersComponent,
    formsComponent,
    LoginComponent,
    EmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', data: { name: "Home" }, component: ProductlistComponent },
      { path: 'products/:productId', data: { name: "product" }, component: ProductDetailsComponent },
      { path: 'cart', data: { name: "Cart" }, component: CartComponent },
      { path: 'shipping', data: { name: "Shipping" }, component: ShippingComponent },
      { path: 'wishlist', data: { name: "Wishlist" }, component: WishlistComponent },
      { path: 'user-forms', data: { name: "User-forms" }, component: signUpComponent },
      { path: 'currency', data: { name: "Currency" }, component: CurrencyComponent },
      { path: 'exchange', data: { name: "Exchange" }, component: ExchangeComponent },
      { path: 'dashboard', data: { name: "Dashboard" }, component: DashboardComponent },
      { path: 'dashboard/news', data: { name: "News" }, component: NewsComponent },
      { path: 'dashboard/news/:articleId', data: { name: "Article" }, component: ArticleComponent },
      { path: 'error', data: { name: "Error" }, component: ErrorComponent },
      { path: 'guard', data: { name: "guard" }, component: GuardComponent },
      { path: 'admin', data: { name: "admin" }, component: AdminComponent, canActivate: [AdminGuard] },
      { path: 'signUp', data: { name: "sign up" }, component: formsComponent },
      { path: 'users', data: { name: "users" }, component: UsersComponent, canActivate: [LoginGuard] },
      { path: 'login', data: { name: "Log In" }, component: LoginComponent },
      { path: 'employees', data: { name: "Employees" }, component: EmployeesComponent },
      { path: 'employee/register', data: { name: "Employee Register" }, component: EmployeeRegisterComponent },
      { path: '**', redirectTo: 'error' }
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
