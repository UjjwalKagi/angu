import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
// import { AppRoutingModule } from './Routing/routing.module';
import {HttpClientModule} from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
// import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AuthenticateService } from './services/authenticate.service';
import { ChangePasswordService } from './services/change-password.service';
import { ContactService } from './services/contact.service';
import { CreateCustomerService } from './services/create-customer.service';
import { HomeService } from './services/home.service';
import { ItemsService } from './services/items.service';
import { MyitemsService } from './services/myitems.service';
import { OrderService } from './services/order.service';
import { ResetPasswordService } from './services/reset-password.service';
import { StoreService } from './services/store.service';
import { UserServiceService } from './services/user-service.service';
import { SiginOutService } from './services/sigin-out.service';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { AddStoreComponent } from './components/admin-panel/add-store/add-store.component';
import { AdminDashboardComponent } from './components/admin-panel/admin-dashboard/admin-dashboard.component';
import { AdmincontactComponent } from './components/admin-panel/admincontact/admincontact.component';
// import { AvailableorderComponent } from './components/admin-panel/availableorder/availableorder.component';
import { ChangePasswordComponent } from './components/admin-panel/change-password/change-password.component';
import { CustomerComponent } from './components/admin-panel/customer/customer.component';
import { DeliverorderComponent } from './components/admin-panel/deliverorder/deliverorder.component';
import { EditaccountComponent } from './components/admin-panel/editaccount/editaccount.component';
import { ItemsComponent } from './components/admin-panel/items/items.component';
import { MyaccountComponent } from './components/admin-panel/myaccount/myaccount.component';
import { NewItemComponent } from './components/admin-panel/new-item/new-item.component';
import { SidnavComponent } from './components/admin-panel/sidnav/sidnav.component';
import { StoreComponent } from './components/admin-panel/store/store.component';

import { ContactComponent } from './components/contact/contact.component';
import { CustomerFormComponent } from './components/customer-form/customer-form.component';
import { FooterComponent } from './components/footer/footer.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HeaderComponent } from './components/header/header.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ResetPasswordComponent } from './components/reset-password/reset-password.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { CaboutusComponent } from './components/customer/caboutus/caboutus.component';
import { CartComponent } from './components/customer/cart/cart.component';
import { CcontactusComponent } from './components/customer/ccontactus/ccontactus.component';
import { CheaderComponent } from './components/customer/cheader/cheader.component';
import { ChomeComponent } from './components/customer/chome/chome.component';
import { CustomereditComponent } from './components/customer/customeredit/customeredit.component';
import { SearchComponent } from './components/customer/search/search.component';
// import { AddNewUser } from './model/addnewUser';
import { AuthGuard } from './auth.guard';
import { AppRoutingModule } from './Routing/routing.module';
import { StoreAvaliableComponent } from './components/store-panel/store-avaliable/store-avaliable.component';
import { AvaliableorderComponent } from './components/admin-panel/avaliableorder/avaliableorder.component';
import { AddNewUserComponent } from './components/admin-panel/user/add-new-user/add-new-user.component';
import { CookieService } from '../../node_modules/ngx-cookie-service';
import { HomeComponent } from './components/start/home/home.component';
import { StoreHomeComponent } from './components/store-panel/store-home/store-home.component';
import { StoreItemComponent } from './components/store-panel/store-item/store-item.component';
import { MyitemslistComponent } from './components/store-panel/myitemslist/myitemslist.component';
import { MyitemsComponent } from './components/store-panel/myitems/myitems.component';
import { StoreDeliverComponent } from './components/store-panel/store-deliver/store-deliver.component';
import { ChangestorepasswordComponent } from './components/store-panel/changestorepassword/changestorepassword.component';
import { StoreaccountComponent } from './components/store-panel/storeaccount/storeaccount.component';
import { StoreeditComponent } from './components/store-panel/storeedit/storeedit.component';
import { StoresidenavComponent } from './components/store-panel/storesidenav/storesidenav.component';



@NgModule({
  declarations: [
    AppComponent,
    StoreeditComponent,
    AboutusComponent,
    AddStoreComponent,
    AdminDashboardComponent,
    StoreaccountComponent,
    AdmincontactComponent,
    StoreDeliverComponent,
    HomeComponent,
    ChangePasswordComponent,
    CustomerComponent,
    ChangestorepasswordComponent,
    DeliverorderComponent,
    EditaccountComponent,
    ItemsComponent,
    MyitemsComponent,
    MyitemslistComponent,
    MyaccountComponent,
    NewItemComponent,
    SidnavComponent,
    StoreComponent,
    StoreItemComponent,
    StoreHomeComponent,
    ContactComponent,
    CustomerFormComponent,
    FooterComponent,
    ForgetPasswordComponent,
    HeaderComponent,
    PageNotFoundComponent,
    ResetPasswordComponent,
    SignInComponent,
    CaboutusComponent,
    CartComponent,
    CcontactusComponent,
    CheaderComponent,
    ChomeComponent,
    StoresidenavComponent,
    CustomereditComponent,
    SearchComponent,
    StoreAvaliableComponent,
    AvaliableorderComponent,
    AddNewUserComponent
  ],
  imports: [
    // [SweetAlert2Module.forRoot()],
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AppRoutingModule
    
  ],
  providers: [AuthenticateService,
    ChangePasswordService,
    ContactService,
    CreateCustomerService,
    HomeService,
    ItemsService,
    MyitemsService,
    OrderService,
    ResetPasswordService,
    StoreService,
    UserServiceService,
    SiginOutService,
    AuthGuard,
    CookieService,
    AuthenticateService
   
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
