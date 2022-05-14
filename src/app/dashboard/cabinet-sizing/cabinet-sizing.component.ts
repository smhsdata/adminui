import { Component, OnInit } from '@angular/core';
import { AppServiceService } from '../../http-services/app-service.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-cabinet-sizing',
  templateUrl: './cabinet-sizing.component.html',
  styleUrls: ['./cabinet-sizing.component.scss']
})
export class CabinetSizingComponent implements OnInit {
  cgm_data: any;
  disableSelect:any
  constructor(private modalService:NgbModal, private appServiceApp: AppServiceService ) { }
  form!: FormGroup;
  formEdit!: FormGroup;
  size_data:any
  radioSelected: any;
  closeResult = '';
  ngOnInit(): void {
    this.cgmData()
    this.radioSelected = "MDF"
    this.getCabinetSize(this.radioSelected);
    this.form = new FormGroup({
      baseCategory: new FormControl('', [Validators.required]),
      typeSize: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      sqft: new FormControl('', [Validators.required]),
     
    });

    this.formEdit = new FormGroup({
      id: new FormControl('', [Validators.required]),
      baseCategory: new FormControl('', [Validators.required]),
      typeSize: new FormControl('', [Validators.required]),
      price: new FormControl('', [Validators.required]),
      sqft: new FormControl('', [Validators.required]),
    });
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
  updateOnclickGen(eve:any, value:any){
    let basevalue = value
   
   this.getCabinetSize(basevalue);

  }

  getCabinetSize(value:any){
    let req = {
      "baseCategory":value
    }
    this.appServiceApp.getCabinetSize(req).subscribe(((data:any) => {
      console.log(data);
      this.size_data = data

    }))
  }

  editdata(editContent: any, size: any) {
    console.log(size)
    this.modalService.open(editContent)
    this.formEdit.setValue({ id: size.id, baseCategory: size.baseCategory,typeSize:size.typeSize, price:size.price, sqft:size.sqft });
    console.log(this.formEdit.value)
  }

  editsubmit() {
    this.appServiceApp.updateCabinetSize(this.formEdit.value) .subscribe((data:any) => {
      let outData = data.output;
      let basename = this.formEdit.value.baseCategory
      console.log(basename)
      if(outData === "Updated Successfully"){
        this.getCabinetSize(basename);
        this.radioSelected = basename
      }
    });
  

    let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    element.click();
    
  }

  submit() {
    this.appServiceApp.createCabinetSize(this.form.value).subscribe(((data:any) => {
      console.log(this.form.value);
      let subData = data.output;
      let basename = this.form.value.baseCategory
      console.log(basename)
      if(subData === "Saved successfully"){
        this.getCabinetSize(basename);
        this.radioSelected = basename
      }
    }))
    let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
    element.click();
   
  }
  delete(size: any) {
    console.log(size)
    const req = {
      id: size.id
    }
    console.log(req)
    this.appServiceApp.deleteCabinetSize(req).subscribe((data:any) => {
      console.log(data);
      let subData = data.output;
      let basename = size.baseCategory
      if(subData === "Deleted Successfully"){
        this.getCabinetSize(basename);
        this.radioSelected = basename
      }
    })
  }
}
