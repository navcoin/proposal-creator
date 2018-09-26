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

  _paymentRequestHashCtl: FormControl;


  _voteCtrl: FormControl;



  voteOption: string[] = ['yes', 'no'];

  constructor() { }

  ngOnInit() {

    this._paymentRequestHashCtl = new FormControl(null, Validators.required);
    this._voteCtrl = new FormControl(this.voteOption[0]);



    this.votePaymentRequestForm = new FormGroup({});

    this.votePaymentRequestForm.addControl('paymentRequestHash', this._paymentRequestHashCtl);
    this.votePaymentRequestForm.addControl('vote', this._voteCtrl);




  }

  onGenerateClick() {
    this.showCmd = true;
    
    this.generatedCMD = `paymentrequestvote ${this._paymentRequestHashCtl.value.toString()} ${this._voteCtrl.value.toString()}`

  }


}
