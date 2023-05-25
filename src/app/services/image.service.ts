import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ImageModel} from "../model/imageModel";

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  private baseUrl:string = "https://localhost:7292"

  constructor(private http:HttpClient) { }


  uploadImage(file : File, caption:string): Observable<ImageModel>{
    const formData = new FormData();
    formData.append('file', file);
    formData.append('caption', caption);

    return this.http.post<ImageModel>(`${this.baseUrl}/api/images`, formData)
  }

  displayImagesAndCaption():Observable<ImageModel[]>{
    return this.http.get<ImageModel[]>(`${this.baseUrl}/api/allImages`)

  }

  /*downloadImage(){
    return  this.http.get(`${this.baseUrl}/api/images/download`, {});
  }
*/
  downloadImage(filePath: string): Observable<Blob> {
    const url = `${this.baseUrl}/api/images/download/${encodeURIComponent(filePath)}`;
    return this.http.get(url, { responseType: 'blob' });
  }

}
