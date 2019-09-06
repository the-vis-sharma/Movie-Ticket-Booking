import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  favouriteList : [];

  constructor(private movieService : MovieService) { 
    movieService.getFavouriteList("pooja").subscribe(data => {
      console.log("apka data: ",data.data);
      this.favouriteList = data.data;
    });
  }

  ngOnInit() {
  }

  /*this.movieService.modifyComment("5d711411b81a85499e58c079", "this is fucking awesome.").subscribe(data => {
    console.log("comment modified: ", data.data);
  });*/

}
