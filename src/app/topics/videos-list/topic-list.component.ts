import { Component, OnInit } from '@angular/core';
import {  HttpResponse, HttpEventType } from '@angular/common/http';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadFileService} from '../../services/upload-file.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class VideosListComponent implements OnInit {

  constructor(private _http:HttpService,private route: ActivatedRoute,private uploadService: UploadFileService,private _navigate: Router) { }
  topicList = [];
  controllerName ="videos";
  fileUpload: Observable<any[]>;
  fileToUpload: File = null;
  ngOnInit() {
    this.fileUpload = this.uploadService.getallVideofiles();
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  deleteVideo(file){
    var file = file.replace(/^.*[\\\/]/, '');
    this.uploadService.deleteVideoToStorage(file).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        //this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is deleted!');
      }
    });
    this._navigate.navigateByUrl('/');
  }
  upload() {

    this.uploadService.pushVideoToStorage(this.fileToUpload).subscribe(event => {
      if (event.type === HttpEventType.UploadProgress) {
        //this.progress.percentage = Math.round(100 * event.loaded / event.total);
      } else if (event instanceof HttpResponse) {
        console.log('File is completely uploaded!');
          this._navigate.navigateByUrl('/');
      }
    });

    //this.fileToUpload = undefined
  }

}
