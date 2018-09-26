import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-payment-request',
  templateUrl: './create-payment-request.component.html',
  styleUrls: ['./create-payment-request.component.scss']
})
export class CreatePaymentRequestComponent implements OnInit {

  proposalDescMaxLength = 300;
  showCmd = false;
  generatedCMD = '';

  createPaymentRequestForm: FormGroup;

  _proposalHash: FormControl;
  _requestedAmountCtl: FormControl;
  _uniqueID: FormControl;
  
  constructor() { }

  ngOnInit() {
    
    this._proposalHash = new FormControl('', Validators.required);
    this._requestedAmountCtl = new FormControl(null, Validators.required);
    this._uniqueID = new FormControl('', Validators.required);



    this.createPaymentRequestForm = new FormGroup({});

    this.createPaymentRequestForm.addControl('proposalHash', this._proposalHash);
    this.createPaymentRequestForm.addControl('requestedAmount', this._requestedAmountCtl);
    this.createPaymentRequestForm.addControl('uniqueID', this._uniqueID);


  }

  onGenerateClick() {
    this.showCmd = true;

    this.generatedCMD = `createpaymentrequest ${this._proposalHash.value.toString()} ${this._requestedAmountCtl.value.toString()} "${this._uniqueID.value.toString()}"`

  }


}
