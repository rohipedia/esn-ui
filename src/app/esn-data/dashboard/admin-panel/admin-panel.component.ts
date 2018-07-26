import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  @Input('data') data;

  constructor() { }

  ngOnInit() {
    console.log('admin data', this.data);
  }

}