import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FavListComponent } from './fav-list/fav-list.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { MovieListComponent } from './body/movie-list/movie-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { FavListFormComponent } from './body/fav-list-form/fav-list-form.component';


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full'},
  // {path: 'addItem:id', component: InventoryFormComponent},
   {path: 'favList', component: FavListComponent},
   {path: 'myBooking', component: MyBookingComponent},
  {path: 'welcome', component: MovieListComponent},
  {path: 'bookTicket/:id', component: TicketFormComponent},
  {path: 'addMovieToFav', component: FavListFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FavListComponent, MyBookingComponent, MovieListComponent, TicketFormComponent, FavListFormComponent]

