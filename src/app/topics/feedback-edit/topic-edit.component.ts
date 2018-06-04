import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UploadFileService} from '../../services/upload-file.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'app-topic-edit',
  templateUrl: './topic-edit.component.html',
  styleUrls: ['./topic-edit.component.css']
})
export class FeedbackEditComponent implements OnInit {
  topic ={};
  controllerName ="feedback";
  fileUploads: Observable<any[]>
  constructor(private _http:HttpService,private route: ActivatedRoute,private _navigate: Router,private uploadService: UploadFileService) {

  }

  ngOnInit() {
    this.getTopic(this.route.snapshot.params['id']);

  }

  getTopic(id){
    debugger;
    this._http.getTopic({'id':id,'controllerName':'feedback'}).subscribe(
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
    this._http.updateTopic(this.topic,this.controllerName).subscribe(
      data=>{


      },
      error=>{
      },
      completed=>{
        this._navigate.navigateByUrl('/');
      })
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
