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
import { UserFormComponent } from './user-form/user-form.component';
import { CurrencyComponent } from './currency/currency.component';
import { ExchangeComponent } from './exchange/exchange.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewsComponent } from './news/news.component';
import { ArticleComponent } from './article/article.component';
import { ErrorComponent } from './error/error.component';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';

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
    UserFormComponent,
    CurrencyComponent,
    ExchangeComponent,
    DashboardComponent,
    NewsComponent,
    ArticleComponent,
    ErrorComponent,
    BreadcrumbsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', data: {name: "Home"}, component: ProductlistComponent },
      { path: 'products/:productId', data: {name: "product"}, component: ProductDetailsComponent },
      { path: 'cart', data: {name: "Cart"}, component: CartComponent },
      { path: 'shipping', data: {name: "Shipping"}, component: ShippingComponent },
      { path: 'wishlist', data: {name: "Wishlist"}, component: WishlistComponent },
      { path: 'user-forms', data: {name: "User-forms"}, component: UserFormComponent },
      { path: 'currency', data: {name: "Currency"}, component: CurrencyComponent },
      { path: 'exchange', data: {name: "Exchange"}, component: ExchangeComponent },
      { path: 'dashboard', data: {name: "Dashboard"}, component: DashboardComponent },
      { path: 'dashboard/news', data: {name: "News"}, component: NewsComponent },
      { path: 'dashboard/news/:articleId', data: {name: "Article"}, component: ArticleComponent },
      { path: 'error', data: {name: "Error"}, component: ErrorComponent },
      { path: '**', redirectTo: 'error' }
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
