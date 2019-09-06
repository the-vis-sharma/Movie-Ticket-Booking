import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent} from './navigation/header/header.component';
import { SidenavBarComponent } from './navigation/sidenav-bar/sidenav-bar.component';
import { MatButtonModule, MatToolbarModule, MatButtonToggleModule, MatSidenavModule, MatMenuModule,
   MatSliderModule, MatSlideToggleModule, MatIconModule, MatCardModule, MatGridListModule,
    MatListModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatOptionModule, MatChipsModule, 
    MatPaginatorModule, MatDialogModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FavListComponent } from './fav-list/fav-list.component';
import { MyBookingComponent } from './my-booking/my-booking.component';
import { SearchComponent } from './body/search/search.component';
import { FilterComponent } from './body/filter/filter.component';
import { MovieListComponent } from './body/movie-list/movie-list.component';
import { TicketFormComponent } from './ticket-form/ticket-form.component';
import { CardsComponent } from './body/cards/cards.component';
import { FavListFormComponent } from './body/fav-list-form/fav-list-form.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavBarComponent,
    FavListComponent,
    MyBookingComponent,
    SearchComponent,
    FilterComponent,
    MovieListComponent,
    TicketFormComponent,
    CardsComponent,
    FavListFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatSidenavModule,
    MatMenuModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    FlexLayoutModule,
    MatListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatChipsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
