import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadFileService} from '../../services/upload-file.service';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class TopicEditComponent implements OnInit {
  topic ={};
  controllerName='topics';
  //fileUploads: Observable<any[]>
  constructor(private _http:HttpService,private route: ActivatedRoute,private _navigate: Router,private uploadService: UploadFileService) {

  }

  ngOnInit() {
    this.getTopic(this.route.snapshot.params['id']);
  }
  getTopic(id){
    this._http.getByTopicName({'topicName':id,'controllerName':'topics'}).subscribe(
      data=>{
        this.topic = data;
        //this.fileUploads = this.uploadService.getFile(data.imageUrl);
        //this.fileUploads = this.uploadService.getFiles(data.imageUrl);
      },
      error=>{
      },
      completed=>{

      });
  }

  updateTopic(data){
    this._http.updateTopic(this.topic,this.controllerName).subscribe(
      data=>{


      },
      error=>{
      },
      completed=>{
        this._navigate.navigateByUrl('/');
      })
  }
}
