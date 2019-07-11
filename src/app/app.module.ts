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
    ErrorComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: ProductlistComponent },
      { path: 'products/:productId', component: ProductDetailsComponent },
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'user-forms', component: UserFormComponent },
      { path: 'currency', component: CurrencyComponent },
      { path: 'exchange', component: ExchangeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'dashboard/news', component: NewsComponent },
      { path: 'dashboard/news/:articleId', component: ArticleComponent },
      { path: 'error', component: ErrorComponent },
      { path: '**', redirectTo: 'error' }
    ]),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
