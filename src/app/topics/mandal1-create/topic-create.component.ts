import { Component, OnInit } from '@angular/core';
import {  HttpResponse, HttpEventType } from '@angular/common/http';
import {UploadFileService} from '../../services/upload-file.service';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css']
})
export class Mandal1CreateComponent implements OnInit {
  topicName ="";
  imgName="";
  topicDetails = "";
  fileToUpload: File = null;
  constructor(private _http:HttpService,private uploadService: UploadFileService,private route: ActivatedRoute,private _navigate: Router) {

  }
  ngOnInit() {
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    /*this.uploadService.pushFileToStorage(this.fileToUpload).subscribe(
      data=>{
        debugger;
      },
      error=>{
        debugger;
      },
      completed=>{
        debugger;
      });*/

  }
  upload() {

    this.uploadService.pushFileToStorage(this.fileToUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        //this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
      }
    });

    //this.fileToUpload = undefined
  }
  addTopic() {
    if (this.fileToUpload !== null){
      this.upload();
      this.imgName = this.fileToUpload.name;
     }
    this._http.createTopic({controllerName:this.route.snapshot.params['id'],topicName:this.topicName,topicDetails:this.topicDetails,imageUrl: this.imgName}).subscribe(
      data=>{
        debugger;
      },
      error=>{
        debugger;
      },
      completed=>{
        this._navigate.navigateByUrl('/');
      })
    this.fileToUpload = undefined
  }
}
