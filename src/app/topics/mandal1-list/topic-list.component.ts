import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {ActivatedRoute, Router} from "@angular/router";
@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.css']
})
export class Mandal1ListComponent implements OnInit {

  constructor(private _http:HttpService,private route: ActivatedRoute,private _navigate: Router) { }
  topicList = [];
  ngOnInit() {
    debugger;
    this._http.getTopicList({controllerName:this.route.snapshot.params['id']}).subscribe(
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
