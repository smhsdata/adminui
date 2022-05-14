import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { AppServiceService } from 'src/app/http-services/app-service.service';
import { NgbModal, ModalDismissReasons, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})

export class LayoutComponent implements OnInit {

  disableSelect: any;
  
  constructor(private modalService: NgbModal, private appServiceApp: AppServiceService, public activeModal: NgbActiveModal) { }
  layout: any;
  closeResult = '';
  form!: FormGroup;
  formEdit!: FormGroup;
  req = {
    layoutName: ''
  }
  ngOnInit(): void {
    this.layoutData();
    this.form = new FormGroup({
      layoutName: new FormControl('', [Validators.required]),
    });

    this.formEdit = new FormGroup({
      id: new FormControl('', [Validators.required]),
      layoutName: new FormControl('', [Validators.required]),
      
    });
    this.disableSelect = true;
    
  }

  layoutData() {
    this.appServiceApp.getLayout().subscribe((data => {
      this.layout = data;
      console.log(this.layout)
    }))
  }

  open(content: any) {
    this.modalService.open(content)
  }

  editdata(editContent: any, layout: any) {
    console.log(layout)
    this.modalService.open(editContent)
    this.formEdit.setValue({ id: layout.id, layoutName: layout.layoutName });
    console.log(this.formEdit.value)
  }

  editsubmit() {
    this.appServiceApp.updateLayout(this.formEdit.value).subscribe((data: any) => {
      let outData = data.output;
      console.log(outData)
      if (outData === "Updated successfully") {
        this.layoutData();
      }
    });


    let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    element.click();

  }

  submit() {
    this.appServiceApp.createlayout(this.form.value).subscribe(((data: any) => {
      console.log(data);
      let subData = data.output;
      if (subData === "Saved successfully") {
        this.layoutData();
      }
    }))

    let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    element.click();
  }

  delete(lays: any) {
    console.log(lays)
    const req = {
      id: lays.id
    }
    console.log(req)
    this.appServiceApp.deleteLayout(req).subscribe((data: any) => {
      console.log(data);
      let subData = data.output;
      if (subData === "Deleted successfully") {
        this.layoutData();
      }
    })
  }
}
