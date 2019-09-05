import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-fav-list',
  templateUrl: './fav-list.component.html',
  styleUrls: ['./fav-list.component.css']
})
export class FavListComponent implements OnInit {

  constructor(private movieService : MovieService) { 
    movieService.getFavouriteList("visnu").subscribe(data => {
      console.log("apka data: ",data);
    });

    movieService.modifyComment("5d711411b81a85499e58c079", "this is fucking awesome.").subscribe(data => {
      console.log("comment modified: ", data);
    });
  }

  ngOnInit() {
  }

}
