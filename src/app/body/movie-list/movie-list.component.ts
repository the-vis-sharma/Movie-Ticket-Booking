import { Component, OnInit } from '@angular/core';
import { MovieService } from 'src/app/movie.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movieList : [];

  constructor( private movieService : MovieService ) { }

  ngOnInit() {
    this.movieService.getMovieList().subscribe(data => {
      console.log("data: ", data);
      this.movieList = data.data;
    }); 
  }

}
