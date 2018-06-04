import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-topic-create',
  templateUrl: './topic-create.component.html',
  styleUrls: ['./topic-create.component.css']
})
export class TopicCreateComponent implements OnInit {
  topicName ="";
  topicDetails = "";
  fileToUpload: File = null;
  progress: { percentage: number } = { percentage: 0 }
  constructor(private _http:HttpService,private uploadService: UploadFileService) {

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
/*  upload() {
    this.progress.percentage = 0;

    this.uploadService.pushFileToStorage(this.fileToUpload).subscribe(
      data=>{
        debugger;
      },
      error=>{
        debugger;
      },
      completed=>{
        debugger;
      });

    //this.fileToUpload = undefined
  }*/
  addTopic(){
 /*   if(this.fileToUpload !== null)
    this.upload();*/
    this._http.createTopic({topicName:this.topicName,topicDetails:this.topicDetails,controllerName: 'topics'}).subscribe(
      data=>{
        debugger;
      },
      error=>{
        debugger;
      },
      completed=>{
        debugger;
      })
    this.fileToUpload = undefined
  }
}
