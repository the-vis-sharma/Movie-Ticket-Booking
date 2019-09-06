import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-my-booking',
  templateUrl: './my-booking.component.html',
  styleUrls: ['./my-booking.component.css']
})
export class MyBookingComponent implements OnInit {

  username = "visnu";
  ticketList : [];

  constructor( private movieService : MovieService ) { 
   }

  ngOnInit() {

    this.movieService.getBoookedTickets(this.username).subscribe(data => {
      console.log("data: ", data);
      this.ticketList = data.data;
    });

  }

}
