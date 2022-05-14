import { Component, OnInit,Input } from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }
  @Input() 
  ngOnInit(): void {
  }
  submit(){
    this.activeModal.close();
  }
}
