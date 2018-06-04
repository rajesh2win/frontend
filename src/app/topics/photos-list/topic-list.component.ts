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
export class PhotosListComponent implements OnInit {

  constructor(private _http:HttpService,private route: ActivatedRoute,private uploadService: UploadFileService,private _navigate: Router) { }
  topicList = [];
  controllerName ="photos";
  fileUpload: Observable<any[]>;
  fileToUpload: File = null;
  ngOnInit() {

        //this.topic = data;
        //this.fileUploads = this.uploadService.getFile(data.imageUrl);
        this.fileUpload = this.uploadService.getallPhotofiles();


  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }
  upload() {

    this.uploadService.pushPhotosToStorage(this.fileToUpload).subscribe(event => {
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
