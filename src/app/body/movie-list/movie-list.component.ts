import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { CommentDialogComponent } from '../comment-dialog/comment-dialog.component';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  constructor(public dialog:MatDialog) { }
  openDialog(){
  	this.dialog.open(CommentDialogComponent);
  }
  ngOnInit() {
  }

}
