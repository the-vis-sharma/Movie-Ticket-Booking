import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  allMovieList : [];
  movieList : [];

  constructor( private movieService : MovieService ) { }

  ngOnInit() {
    this.movieService.getMovieList().subscribe(data => {
      console.log("data: ", data);
      this.movieList = data.data;
    }); 
  }

  filterByGenre(event) {
    if(event.value=="all") {
      this.movieService.getMovieList().subscribe(data => {
        console.log("data: ", data);
        this.movieList = data.data;
      }); 
    }
    else {
      this.movieService.getMovieDetailByGenre(event.value).subscribe(data => {
        console.log("filtered data: ", data);
        this.movieList = data.data;
      });
    }
  }

  searchMovieByTitle(data) {
    this.movieService.getMovieDetailByTitle(data).subscribe(data => {
      console.log("search data: ", data);
      this.movieList = data.data;
    });
  }


}
