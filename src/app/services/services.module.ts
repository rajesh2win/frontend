import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {HttpService} from "./http.service";
import {UploadFileService} from "./upload-file.service";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers:[
    HttpService,
    UploadFileService
  ],
  declarations: []
})
export class ServicesModule { }
