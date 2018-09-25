import {Component, OnInit} from '@angular/core';
import {Form, FormControl, FormGroup, Validators} from '@angular/forms';
import {Debugger} from 'inspector';

@Component({
  selector: 'app-create-proposal',
  templateUrl: './create-proposal.component.html',
  styleUrls: ['./create-proposal.component.scss']
})
export class CreateProposalComponent implements OnInit {

  proposalDescMaxLength = 300;
  showCmd = false;
  generatedCMD = '';

  createProposalForm: FormGroup;

  _requestedAmountCtl: FormControl;
  _navAddressCtrl: FormControl;
  proposalDescriptionCtrl: FormControl;

  _yearsCtrl: FormControl;
  _monthsCtrl: FormControl;
  _daysCtrl: FormControl;


  years: number[] = [0, 1, 2, 3, 4, 5];
  months: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  days: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,];

  constructor() { }

  ngOnInit() {

    this._requestedAmountCtl = new FormControl(null, Validators.required);
    this.proposalDescriptionCtrl = new FormControl('', Validators.required);
    this._navAddressCtrl = new FormControl('', Validators.required);

    this._yearsCtrl = new FormControl(0);
    this._monthsCtrl = new FormControl(0);
    this._daysCtrl = new FormControl(0);



    this.createProposalForm = new FormGroup({});

    this.createProposalForm.addControl('requestedAmount', this._requestedAmountCtl);
    this.createProposalForm.addControl('navAddress', this._navAddressCtrl);
    this.createProposalForm.addControl('description', this.proposalDescriptionCtrl);
    this.createProposalForm.addControl('years', this._yearsCtrl);
    this.createProposalForm.addControl('months', this._monthsCtrl);
    this.createProposalForm.addControl('days', this._daysCtrl);



  }

  onGenerateClick() {
    this.showCmd = true;


    const currentDate: Date =  new Date();
    const futureDate: Date = new Date();
    futureDate.setFullYear(futureDate.getFullYear() + parseInt(this._yearsCtrl.value.toString(), 10));
    futureDate.setMonth(futureDate.getMonth() + parseInt(this._monthsCtrl.value.toString(), 10));
    futureDate.setDate(futureDate.getDate() + parseInt(this._daysCtrl.value.toString(), 10));

    const duration =  Math.round((futureDate.getTime() - currentDate.getTime()) / 1000);


    this.generatedCMD = `createproposal ${this._navAddressCtrl.value.toString()} ${this._requestedAmountCtl.value.toString()}  ${duration}  "${this.proposalDescriptionCtrl.value.toString()}"`

  }


}
