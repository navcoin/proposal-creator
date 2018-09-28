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

  proposalHashCtrl: FormControl;


  _voteCtrl: FormControl;

  proposalHashLength = 64;

  voteOption: string[] = ['yes', 'no'];

  constructor() { }

  ngOnInit() {

    this.proposalHashCtrl = new FormControl('', [
      Validators.required,
      Validators.minLength(64),
      Validators.maxLength(64)
    ]);
    this._voteCtrl = new FormControl(this.voteOption[0]);

    this.voteProposalForm = new FormGroup({});

    this.voteProposalForm.addControl('proposalHash', this.proposalHashCtrl);
    this.voteProposalForm.addControl('vote', this._voteCtrl);

  }

  onGenerateClick() {
    this.showCmd = true;
    
    this.generatedCMD = `proposalvote ${this.proposalHashCtrl.value.toString()} ${this._voteCtrl.value.toString()}`

  }


}
