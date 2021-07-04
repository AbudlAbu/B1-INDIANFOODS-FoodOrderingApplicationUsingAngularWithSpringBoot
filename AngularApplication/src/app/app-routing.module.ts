import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartitemsComponent } from './cartitems/cartitems.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { Restaurent1Component } from './restaurent1/restaurent1.component';
import { SearchComponent } from './search/search.component';
 
import { SidebarComponent } from './sidebar/sidebar.component';
import { SliderComponent } from './slider/slider.component';



const routes: Routes = [
  
  {path: '',component: SidebarComponent, children : [
     {path:'',redirectTo:'restaurant1/adigas',pathMatch:'full'},
    {path: 'restaurant1/:adigas',component: Restaurent1Component},
    {path: 'restaurant2/:rotighar',component:Restaurent1Component},
    {path: 'restaurant3/:punjabirasoi',component:Restaurent1Component},
    {path: 'restaurant4/:udupi',component:Restaurent1Component},
    {path:'registration',component:RegistrationComponent},
    {path:'login',component:LoginComponent},
    {path:'cartitems',component:CartitemsComponent},
    {path:'check',component:CheckoutComponent},
    {path:'search',component:SearchComponent},
    // {path:'',component:SliderComponent}
  ]}

 
 
   
 
   
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
