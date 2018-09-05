import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from '../components/sign-in/sign-in.component';
import { CustomerFormComponent } from '../components/customer-form/customer-form.component';
 import { ForgetPasswordComponent } from '../components/forget-password/forget-password.component';
 import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AddNewUserComponent } from '../components/admin-panel/user/add-new-user/add-new-user.component';
import { AddNewUser } from '../model/addnewUser';
import { AdminDashboardComponent } from '../components/admin-panel/admin-dashboard/admin-dashboard.component';
import { ResetPasswordComponent } from '../components/reset-password/reset-password.component';
import { HomeComponent } from '../components/start/home/home.component';
import { AuthGuard } from '../auth.guard';
import { ChomeComponent } from '../components/customer/chome/chome.component';
import { CartComponent } from '../components/customer/cart/cart.component';
import { CustomerComponent } from '../components/admin-panel/customer/customer.component';
import { StoreComponent } from '../components/admin-panel/store/store.component';
import { AddStoreComponent } from '../components/admin-panel/add-store/add-store.component';
import { ItemsComponent } from '../components/admin-panel/items/items.component';
import { NewItemComponent } from '../components/admin-panel/new-item/new-item.component';
import { MyaccountComponent } from '../components/admin-panel/myaccount/myaccount.component';
import { ChangePasswordComponent } from '../components/admin-panel/change-password/change-password.component';
import { EditaccountComponent } from '../components/admin-panel/editaccount/editaccount.component';
import { StoreHomeComponent } from '../components/store-panel/store-home/store-home.component';
import { StoreItemComponent } from '../components/store-panel/store-item/store-item.component';
import { DeliverorderComponent } from '../components/admin-panel/deliverorder/deliverorder.component';
import { AvaliableorderComponent } from '../components/admin-panel/avaliableorder/avaliableorder.component';
import { MyitemsComponent } from '../components/store-panel/myitems/myitems.component';
import { MyitemslistComponent } from '../components/store-panel/myitemslist/myitemslist.component';
import { StoreAvaliableComponent } from '../components/store-panel/store-avaliable/store-avaliable.component';
import { StoreDeliverComponent } from '../components/store-panel/store-deliver/store-deliver.component';
import { ChangestorepasswordComponent } from '../components/store-panel/changestorepassword/changestorepassword.component';
import { StoreaccountComponent } from '../components/store-panel/storeaccount/storeaccount.component';
import { SearchComponent } from '../components/customer/search/search.component';
import { AboutusComponent } from '../components/aboutus/aboutus.component';
import { ContactComponent } from '../components/contact/contact.component';
import { AdmincontactComponent } from '../components/admin-panel/admincontact/admincontact.component';
import { CaboutusComponent } from '../components/customer/caboutus/caboutus.component';
import { CcontactusComponent } from '../components/customer/ccontactus/ccontactus.component';
import { StoreeditComponent } from '../components/store-panel/storeedit/storeedit.component';
import { CustomereditComponent } from '../components/customer/customeredit/customeredit.component';

const routes: Routes = [
  {
    path: '', redirectTo: '/home', pathMatch: 'full'
  },

  {
    path:'home',
    component:HomeComponent

  },

  {
    path: 'login',
    component: SignInComponent
  },
  {
    path: 'createCustomer',
    component: CustomerFormComponent
  },
  {
    path: 'forgetPassword',
    component: ForgetPasswordComponent
  },
 
  {
    path:'adminDashboard',
    component:AdminDashboardComponent,
  },
  {
    path:'customer',
    component:ChomeComponent,
  },

  {
    path:'reset/:token',
    component:ResetPasswordComponent
  },
  {
    path:'cart',
    component:CartComponent,
  },
  {
    path:'newUser',
    component:AddNewUserComponent,
  },
  {
    path:'acustomer',
    component:CustomerComponent,
  },
  {
    path:'astore',
    component:StoreComponent,
  },
  {
    path:'addstore',
    component:AddStoreComponent,
  },
  {
    path:'aitem',
    component:ItemsComponent,
  },
  {
    path:'newitem',
    component:NewItemComponent,
  },
  {
    path:'account',
    component:MyaccountComponent,
  },
  {
    path:'changepassword',
    component:ChangePasswordComponent
  },
  {
    path:'edit',
    component:EditaccountComponent
  },
  {
    path:'Logout',
    component:SignInComponent
  },
  {
    path:'store/home',
    component:StoreHomeComponent
  },
  {
    path:'store/item',
    component:StoreItemComponent
  },
  {
    path:'order/deliver',
    component:DeliverorderComponent
  },
  {
    path:'order/deliver/search',
    component:DeliverorderComponent
  },
  {
    path:'order/avaliable',
    component:AvaliableorderComponent
  },

  {
    path:'order/avaliable/search',
    component:AvaliableorderComponent
  },
  {
    path:'store/storeitem',
    component:MyitemslistComponent
  },
  {
    path:'store/addnew',
    component:MyitemsComponent
  },
  {
    path:'store/avaliable',
    component:StoreAvaliableComponent
  },
  {
    path:'store/deliver',
    component:StoreDeliverComponent
  },
  {
    path:'store/changepassword',
    component:ChangestorepasswordComponent
  },
  {
    path:'store/account',
    component:StoreaccountComponent
  },
  {
    path:'store/edit',
    component:StoreeditComponent
  },

  {
    path:'search',
    component:SearchComponent
  },
  {
    path:'about',
    component:AboutusComponent
  },
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'admin/contact',
    component:AdmincontactComponent
  },
  {
    path:'customer/about-us',
    component:CaboutusComponent
  },
  {
    path:'customer/contact-us',
    component:CcontactusComponent
  },

  {
    path:'customer/edit',
    component:CustomereditComponent
  },




];

@NgModule({
  imports: [RouterModule.forRoot(routes),
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }