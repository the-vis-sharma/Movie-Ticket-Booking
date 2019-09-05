import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sidenav-bar',
  templateUrl: './sidenav-bar.component.html',
  styleUrls: ['./sidenav-bar.component.css']
})
export class SidenavBarComponent implements OnInit {

  @Output() closeSidenav = new EventEmitter<void>();
  constructor() { }

  ngOnInit() {
  }

  onClose() {
    this.closeSidenav.emit();
  }

}
