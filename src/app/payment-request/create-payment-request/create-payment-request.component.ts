import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-create-payment-request',
  templateUrl: './create-payment-request.component.html',
  styleUrls: ['./create-payment-request.component.scss']
})
export class CreatePaymentRequestComponent implements OnInit {

  proposalDescMaxLength = 300;
  proposalHashLength = 64;
  showCmd = false;
  generatedCMD = '';

  createPaymentRequestForm: FormGroup;

  proposalHash: FormControl;
  requestedAmountCtl: FormControl;
  uniqueID: FormControl;
  
  constructor() { }

  ngOnInit() {
    
    this.proposalHash = new FormControl('', [
      Validators.required,
      Validators.minLength(64),
      Validators.maxLength(64)
    ]);
    this.requestedAmountCtl = new FormControl('', [Validators.required, Validators.pattern("^[0-9]*$")]);
    this.uniqueID = new FormControl('', Validators.required);



    this.createPaymentRequestForm = new FormGroup({});

    this.createPaymentRequestForm.addControl('proposalHash', this.proposalHash);
    this.createPaymentRequestForm.addControl('requestedAmount', this.requestedAmountCtl);
    this.createPaymentRequestForm.addControl('uniqueID', this.uniqueID);


  }

  onGenerateClick() {
    this.showCmd = true;

    this.generatedCMD = `createpaymentrequest ${this.proposalHash.value.toString()} ${this.requestedAmountCtl.value.toString()} "${this.uniqueID.value.toString()}"`

  }


}
