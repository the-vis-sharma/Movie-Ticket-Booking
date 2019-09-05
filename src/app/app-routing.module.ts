import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavListComponent } from './fav-list/fav-list.component';
import { MyBookingComponent } from './my-booking/my-booking.component';


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  // {path: 'addItem:id', component: InventoryFormComponent},
   {path: 'favList', component: FavListComponent},
   {path: 'myBooking', component: MyBookingComponent},
  //  {path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FavListComponent, MyBookingComponent]

