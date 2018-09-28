import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vote-payment-request',
  templateUrl: './vote-payment-request.component.html',
  styleUrls: ['./vote-payment-request.component.scss']
})
export class VotePaymentRequestComponent implements OnInit {

  showCmd = false;
  generatedCMD = '';

  votePaymentRequestForm: FormGroup;

  paymentRequestHashCtrl: FormControl;


  _voteCtrl: FormControl;

  paymentRequestHashLength = 64;

  voteOption: string[] = ['yes', 'no'];

  constructor() { }

  ngOnInit() {

    this.paymentRequestHashCtrl = new FormControl('', [
      Validators.required,
      Validators.minLength(64),
      Validators.maxLength(64)
    ]);
    this._voteCtrl = new FormControl(this.voteOption[0]);



    this.votePaymentRequestForm = new FormGroup({});

    this.votePaymentRequestForm.addControl('paymentRequestHash', this.paymentRequestHashCtrl);
    this.votePaymentRequestForm.addControl('vote', this._voteCtrl);




  }

  onGenerateClick() {
    this.showCmd = true;
    
    this.generatedCMD = `paymentrequestvote ${this.paymentRequestHashCtrl.value.toString()} ${this._voteCtrl.value.toString()}`

  }


}
