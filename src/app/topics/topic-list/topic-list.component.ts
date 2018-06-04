import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class TopicListComponent implements OnInit {

  constructor(private _http:HttpService) { }
  topicList = [];
  ngOnInit() {
    this._http.getTopicList({controllerName:'topics'}).subscribe(
      data=>{
        this.topicList = data;
      },
      error=>{
      },
      completed=>{
      });

    // this._http.createTopic(data).subscribe(
    //   data=>{
    //     debugger;
    //   },
    //   error=>{
    //     debugger;
    //   },
    //   completed=>{
    //     debugger;
    //   })
  }
  /*updateTopic(){
    this._http.updateTopic(this.id).subscribe(
      data=>{
        debugger;
      },
      error=>{
        debugger;
      },
      completed=>{
        debugger;
      })
  }*/

}
