import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import {
  getCCM,
  getLayout,
  getSCM,
  getSize,
  createLayout,
  updateLayout,
  deleteLayout,
  createCCM,
  updateCCM,
  deleteCCM,
  createSCM,
  deleteSCM,
  updateSCM,
  saveSize,
  updateCabinetSize,
  deleteCabinetSizing
} from '../configs/web-properties.config'
// import { Order } from '../dashboard/layout/layout.component';
@Injectable({
  providedIn: 'root'
})

export class AppServiceService {

  constructor(
    private http: HttpClient
  ) { }



  getCCM() {
    return this.http.get(getCCM);
  }

  getLayout() {
    return this.http.get(getLayout);
  }
  getSCM() {
    return this.http.get(getSCM);
  }
 
  createlayout(post:any){
    return this.http.post(createLayout, post);
  }

  updateLayout(post:any){
     const value= this.http.post(updateLayout, post)
     return value;
  }

  deleteLayout(post:any){
    return this.http.post(deleteLayout, post)
  }
  createCCM(post:any){
    return this.http.post(createCCM, post);
  }
  UpdateCCM(post:any){
    const value= this.http.post(updateCCM, post)
    return value;
 }
 deleteCCM(post:any){
  return this.http.post(deleteCCM, post)
}
createSCM(post:any){
  return this.http.post(createSCM, post);
}
UpdateSCM(post:any){
  const value= this.http.post(updateSCM, post)
  return value;
}
deleteSCM(post:any){
return this.http.post(deleteSCM, post)
}
getCabinetSize(post:any) {
  return this.http.post( getSize, post);
}
createCabinetSize(post:any){
  return this.http.post(saveSize, post)
}
updateCabinetSize(post:any){
  return this.http.post(updateCabinetSize, post)
}
deleteCabinetSize(post:any){
  return this.http.post(deleteCabinetSizing, post)
}
}
