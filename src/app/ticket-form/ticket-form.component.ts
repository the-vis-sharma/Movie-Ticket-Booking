import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  templateUrl: './ticket-form.component.html',
  styleUrls: ['./ticket-form.component.css']
})
export class TicketFormComponent implements OnInit {
  
  movieId : string;
  movie : any;
  seats : number;

  public bookForm : FormGroup;

  constructor( private movieService : MovieService,  private route : ActivatedRoute ) { 
    this.movieId = this.route.snapshot.params.id;
    console.log("movie id: ", this.movieId);
   }

  ngOnInit() {

    this.bookForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z0-9]+[a-zA-Z\ 0-9]*")]),
      seats: new FormControl('', [Validators.required, Validators.min(0), Validators.max(50), Validators.pattern("^[0-9]+$")]),
      amount: new FormControl('', [Validators.required, Validators.min(0), Validators.pattern("^[0-9]+$")])
    });


    this.movieService.getMovieDetailById(this.movieId).subscribe(data => {
      console.log("data: ", data);
      this.movie = data.data;
    });  

  }

  public bookTicketAction(data) {
    data.movie = this.movie;
    data.amount = 150 * data.seats;
    this.movieService.bookTicket(data).subscribe(data => {
      console.log("response: ", data);
    });
  }

}
