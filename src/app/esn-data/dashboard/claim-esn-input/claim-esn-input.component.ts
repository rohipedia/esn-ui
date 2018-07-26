import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-claim-esn-input',
  templateUrl: './claim-esn-input.component.html',
  styleUrls: ['./claim-esn-input.component.css']
})
export class ClaimEsnInputComponent implements OnInit {

  claimEsnForm;

  constructor() { }

  ngOnInit() {
    this.claimEsnForm = new FormGroup({
      'device': new FormControl('Iphone 6 64GB Gold', Validators.required),
      'numberOfEsns': new FormControl('1', Validators.required)
    });
  }

}
