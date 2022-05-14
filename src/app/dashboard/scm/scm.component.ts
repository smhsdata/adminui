import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { AppServiceService } from '../../http-services/app-service.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-scm',
  templateUrl: './scm.component.html',
  styleUrls: ['./scm.component.scss']
})
export class ScmComponent implements OnInit {
  disableSelect: any;

  constructor(private modalService:NgbModal, private appServiceApp: AppServiceService) { }


  scm_data:any
  closeResult = '';
  form!: FormGroup;
  formEdit!: FormGroup;
  ngOnInit(): void {
    this.scmData();
    this.form = new FormGroup({
      scmName: new FormControl('', [Validators.required]),
      scmPrice: new FormControl('', [Validators.required]),
      baseCategory: new FormControl('', [Validators.required]),
     
    });

    this.formEdit = new FormGroup({
      id: new FormControl('', [Validators.required]),
      scmName: new FormControl('', [Validators.required]),
      scmPrice: new FormControl('', [Validators.required]),
      baseCategory: new FormControl('', [Validators.required]),
    });
    this.disableSelect = true;
  }
  scmData(){
    this.appServiceApp.getSCM().subscribe((data=>{
      this.scm_data= data;
      console.log(this.scm_data);
      }))
  }
  
    open(content: any) {
      this.modalService.open(content)
    }
  
    editdata(editContent: any, scm: any) {
      console.log(scm)
      this.modalService.open(editContent)
      this.formEdit.setValue({ id: scm.scmId, scmName: scm.scmName, scmPrice: scm.scmPrice, baseCategory: scm.baseCategory });
      console.log(this.formEdit.value)
    }
    editsubmit() {
      this.appServiceApp.UpdateSCM(this.formEdit.value) .subscribe((data:any) => {
        let outData = data.output;
        console.log(outData)
        if(outData === "Updated successfully"){
          this.scmData();
        }
      });
    
  
      let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
      element.click();
      
    }
  
    submit() {
      this.appServiceApp.createSCM(this.form.value).subscribe(((data:any) => {
        console.log(data);
        let subData = data.output;
        if(subData === "Saved successfully"){
          this.scmData();
        }
      }))
      let element: HTMLElement = document.getElementById('auto_trigger') as HTMLElement;
      element.click();
      this.scmData();
    }
  
    delete(scm: any) {
      console.log(scm)
      const req = {
        id: scm.scmId
      }
      console.log(req)
      this.appServiceApp.deleteSCM(req).subscribe((data:any) => {
        console.log(data);
        let subData = data.output;
        if(subData === "Deleted Sucessfully"){
          this.scmData();
        }
      })
    }
 
  // scm_data = [
  //   {
  //     "id": 1,
  //     "name": "laminate - HGL or MR",
  //     "price":"150"
  //   },
  //   {
  //     "id": 2,
  //     "name": "laminate - SF",
  //     "price":"3300"
  //   },
  //   {
  //     "id": 3,
  //     "name": "laminate - Texture",
  //     "price":"200"
  //   },
  //   {
  //     "id": 4,
  //     "name": "Arylic - 1mm",
  //     "price":"21100"
  //   },
  //   {
  //     "id": 5,
  //     "name": "Arylic - 2mm",
  //     "price":"200"
  //   },
  //   {
  //     "id": 6,
  //     "name": "Arylic - matt",
  //     "price":"200"
  //   },
  //   {
  //     "id": 7,
  //     "name": "PU Finish Matt",
  //     "price":"200"
  //   },
  //   {
  //     "id": 8,
  //     "name": "PU Finish Glossy",
  //     "price":"200"
  //   },
  //   {
  //     "id": 9,
  //     "name": "PU Finish 5 Panel",
  //     "price":"200"
  //   },
  //   {
  //     "id": 10,
  //     "name": "Veneer Matt",
  //     "price":"200"
  //   },
  //   {
  //     "id": 11,
  //     "name": "Venner Glossy",
  //     "price":"200"
  //   },
  //   {
  //     "id": 12,
  //     "name": "Lacquer - Plain Glass",
  //     "price":"200"
  //   },
  //   {
  //     "id": 13,
  //     "name": "Lacquer - Tinted Glass",
  //     "price":"200"
  //   },
  //   {
  //     "id": 14,
  //     "name": "Lacquer - Mirror",
  //     "price":"200"
  //   },
  // ]
}
