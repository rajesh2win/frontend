import { Injectable } from '@angular/core';
import { HttpClient, HttpEventType} from '@angular/common/http';
import "rxjs/add/operator/map";

@Injectable()
export class HttpService {
  //private API_URL= "/";
  private API_URL= "/react/";
  //private API_URL= "/kondapi/";

  constructor(private _http:HttpClient) {

  }
  getTopicList(data:any):any{
    debugger;
    return this._http.get(this.API_URL+data.controllerName);
  }
  getWorkTopicList(data:any):any{
    debugger;
    return this._http.get(this.API_URL+data.controllerName+"/"+data.item);
  }
  getTopic(data:any):any{
    debugger;
    return this._http.get(this.API_URL+data.controllerName+"/"+data.id);
  }

  getByTopicName(data:any):any{
    debugger;
    return this._http.get(this.API_URL+data.controllerName+"/topicname/"+data.topicName);
  }
  createTopic(data:any):any{
    return this._http.post(this.API_URL+data.controllerName,data);
  }

  updateTopic(data:any,controllerName:String):any{
    return this._http.put(this.API_URL+controllerName+"/"+data.id,data);
  }
  deleteTopic(data:any,controllerName:String):any{
    return this._http.delete(this.API_URL+controllerName+"/"+data.id,data);
  }
}
