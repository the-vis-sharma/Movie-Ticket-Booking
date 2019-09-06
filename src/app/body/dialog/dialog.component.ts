import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { MovieService } from 'src/app/movie.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  addFavForm : FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data : any, private movieService : MovieService) { }

  ngOnInit() {
    this.addFavForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(50), Validators.pattern("[a-zA-Z0-9]+[a-zA-Z\ 0-9,\(\)-]*")]),
      comment: new FormControl('', [Validators.maxLength(500)])
    });

  }

  onSubmit(data) {
    console.log("movie: ", this.data.movie);
    data.movie = this.data.movie;
    this.movieService.addToFavList(data).subscribe(res => {
      console.log("res: for fav", res);
    });
  }

}
