import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {  HttpResponse, HttpEventType } from '@angular/common/http';
import {ActivatedRoute, Router} from "@angular/router";
import {UploadFileService} from '../../services/upload-file.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicNewsEditComponent implements OnInit {
  topic ={imageUrl:''};
  controllerName ="news";
  fileUploads: Observable<any[]>
  imgName="";
  fileToUpload: File = null;
  constructor(private _http:HttpService,private route: ActivatedRoute,private _navigate: Router,private uploadService: UploadFileService) {

  }
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  ngOnInit() {
    this.getTopic(this.route.snapshot.params['id']);

  }

  getTopic(id){
    debugger;
    this._http.getTopic({'id':id,'controllerName':'news'}).subscribe(
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

  updateTopic(data){
    debugger;
    if(this.fileToUpload !== null) {
      this.upload();
      this.imgName = this.fileToUpload.name;
      this.topic.imageUrl = this.fileToUpload.name;
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
