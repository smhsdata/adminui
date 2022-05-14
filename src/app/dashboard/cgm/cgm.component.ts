import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppServiceService } from '../../http-services/app-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-cgm',
  templateUrl: './cgm.component.html',
  styleUrls: ['./cgm.component.scss']
})
export class CgmComponent implements OnInit {
  disableSelect: any;

  constructor(private modalService:NgbModal, private appServiceApp: AppServiceService) { }
  cgm_data:any
  closeResult = '';
  form!: FormGroup;
  formEdit!: FormGroup;
  ngOnInit(): void {
    this.cgmData();
    this.form = new FormGroup({
      ccmName: new FormControl('', [Validators.required]),
    });

    this.formEdit = new FormGroup({
      id: new FormControl('', [Validators.required]),
      ccmName: new FormControl('', [Validators.required])
    });
    this.disableSelect = true;
  }
 
  cgmData(){
    this.appServiceApp.getCCM().subscribe((data=>{
      this.cgm_data= data;
      console.log(this.cgm_data);
      }))
  }

  open(content: any) {
    this.modalService.open(content)
  }

  editdata(editContent: any, ccm: any) {
    console.log(ccm)
    this.modalService.open(editContent)
    this.formEdit.setValue({ id: ccm.ccmId, ccmName: ccm.ccmName });
    console.log(this.formEdit.value)
  }
  editsubmit() {
    this.appServiceApp.UpdateCCM(this.formEdit.value) .subscribe((data:any) => {
      let outData = data.output;
      console.log(outData)
      if(outData === "Updated Successfully"){
        this.cgmData();
      }
    });
    let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    element.click();
    
  }

  submit() {
    this.appServiceApp.createCCM(this.form.value).subscribe(((data:any) => {
      console.log(data);
      let subData = data.output;
      if(subData === "Saved successfully"){
        this.cgmData();
      }
    }))
    let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    element.click();
    this.cgmData();
  }

  delete(lays: any) {
    console.log(lays)
    const req = {
      id: lays.ccmId
    }
    console.log(req)
    this.appServiceApp.deleteCCM(req).subscribe((data:any) => {
      console.log(data);
      let subData = data.output;
      if(subData === "Deleted Successfully"){
        this.cgmData();
      }
    })
  }
}
