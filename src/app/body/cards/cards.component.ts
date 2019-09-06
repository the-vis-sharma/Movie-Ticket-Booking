import { Component, OnInit, Input } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDialog} from '@angular/material/dialog';
import {DialogComponent} from '../dialog/dialog.component';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  @Input() favourite : any;

  constructor(public dialog:MatDialog) { }
  openDialog(){
  	this.dialog.open(DialogComponent);
  }

  ngOnInit() {
  }

}
