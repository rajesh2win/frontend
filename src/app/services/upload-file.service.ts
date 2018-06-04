import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UploadFileService {
  //private API_URL= "/";
  private API_URL= "/react/";
  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.API_URL+"upload", formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  pushVideoToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.API_URL+"uploadVideos", formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  pushPhotosToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.API_URL+"uploadPhotos", formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  pushAnyToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append('file', file);

    const req = new HttpRequest('POST', this.API_URL+"uploadAny", formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  getAny():Observable<any> {
    return this.http.get(this.API_URL+'getAny/')
  }
  getFiles(imageUrl): Observable<any> {
    return this.http.get(this.API_URL+'getallfiles/'+imageUrl)
  }
  getAllFiles(imageUrl): Observable<any> {
    return this.http.get(this.API_URL+'getallfiles')
  }
  getallfiles():Observable<any> {
    return this.http.get(this.API_URL+'getallfiles/')
  }
  getallPhotofiles():Observable<any> {
    return this.http.get(this.API_URL+'getallphotos/')
  }
  getallVideofiles():Observable<any> {
    return this.http.get(this.API_URL+'getallvideos/')
  }
}
