import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {  HttpResponse, HttpEventType } from '@angular/common/http';

import {UploadFileService} from '../../services/upload-file.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class Mandal1EditComponent implements OnInit {
  topic ={imageUrl:''};
  controllerName ="mandal1";
  imgName="";
  tmpImg="";
  fileToUpload: File = null;
  fileUploads: Observable<any[]>
  constructor(private _http:HttpService,private route: ActivatedRoute,private _navigate: Router,private uploadService: UploadFileService) {

  }

  ngOnInit() {
    this.getTopic(this.route.snapshot.params['id']);

  }

  getTopic(id){
    debugger;
    this._http.getTopic({'id':id,'controllerName':'mandal1'}).subscribe(
      data=>{
        this.topic = data;
        //this.fileUploads = this.uploadService.getFile(data.imageUrl);
        this.fileUploads = this.uploadService.getFiles(data.imageUrl);
      },
      error=>{
      },
      completed=>{

      });
  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  updateTopic(data){
    if(this.fileToUpload !== null) {
      this.upload();
      this.tmpImg = this.topic.imageUrl;
      this.imgName = this.fileToUpload.name;
      this.topic.imageUrl = this.fileToUpload.name;
      this.deleteImage(this.tmpImg);
    }
    this._http.updateTopic(this.topic,this.controllerName).subscribe(
      data=>{


      },
      error=>{
      },
      completed=>{
        this._navigate.navigateByUrl('/');
      })
  }
  deleteImage(file){
    debugger;
    var file = file.replace(/^.*[\\\/]/, '');
    this.uploadService.deletePhotosCommon(file).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        //this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is deleted!');
      }
    });
    this._navigate.navigateByUrl('/');
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
  deleteTopic(data){
    this._http.deleteTopic(this.topic,this.controllerName).subscribe(
      data=>{


      },
      error=>{
      },
      completed=>{
        this._navigate.navigateByUrl('/');
      })
  }
}
