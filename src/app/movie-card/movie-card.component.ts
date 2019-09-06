import { Component, OnInit, Input } from '@angular/core';
import { MovieService } from '../movie.service';
import { MatDialog } from '@angular/material';
import { DialogComponent } from '../body/dialog/dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.css']
})
export class MovieCardComponent implements OnInit {


  @Input() movie : any;

  constructor( public dialog : MatDialog) { }

  ngOnInit() {

  }

  openDialog() {
    let dialogRef = this.dialog.open(DialogComponent, { data : { movie : this.movie} });
  }



}
