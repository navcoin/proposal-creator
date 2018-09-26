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
    this.showCmd = true;
    
    this.generatedCMD = `proposalvote ${this._proposalHashCtl.value.toString()} ${this._voteCtrl.value.toString()}`

  }


}
