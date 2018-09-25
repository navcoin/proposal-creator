import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-vote-proposal',
  templateUrl: './vote-proposal.component.html',
  styleUrls: ['./vote-proposal.component.scss']
})
export class VoteProposalComponent implements OnInit {

  showCmd = false;
  generatedCMD = '';

  voteProposalForm: FormGroup;

  _proposalHashCtl: FormControl;


  _voteCtrl: FormControl;



  voteOption: string[] = ['yes', 'no'];

  constructor() { }

  ngOnInit() {

    this._proposalHashCtl = new FormControl(null, Validators.required);
    this._voteCtrl = new FormControl(this.voteOption[0]);




    this.voteProposalForm = new FormGroup({});

    this.voteProposalForm.addControl('proposalHash', this._proposalHashCtl);
    this.voteProposalForm.addControl('vote', this._voteCtrl);




  }

  onGenerateClick() {
    // this.showCmd = true;
    //
    //
    // const currentDate: Date =  new Date();
    // const futureDate: Date = new Date();
    // futureDate.setFullYear(futureDate.getFullYear() + parseInt(this._voteCtrl.value.toString(), 10));
    // futureDate.setMonth(futureDate.getMonth() + parseInt(this._monthsCtrl.value.toString(), 10));
    // futureDate.setDate(futureDate.getDate() + parseInt(this._daysCtrl.value.toString(), 10));
    //
    // const duration =  Math.round((futureDate.getTime() - currentDate.getTime()) / 1000);
    //
    //
    // this.generatedCMD = `createproposal ${this._navAddressCtrl.value.toString()} ${this._proposalHashCtl.value.toString()}  ${duration}  "${this.proposalDescriptionCtrl.value.toString()}"`

  }


}
