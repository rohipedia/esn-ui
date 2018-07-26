import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from './../../../auth/auth.service';


@Component({
  selector: 'app-esn-grid',
  templateUrl: './esn-grid.component.html',
  styleUrls: ['./esn-grid.component.css']
})
export class EsnGridComponent implements OnInit {

  @Input('data') esnData: any;
  isAdmin: boolean = false;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.isAdmin = this.authService.isAdmin;    
  }

}
