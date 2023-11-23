import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {


 
private readonly API_URL = 'http://localhost:8080';

constructor(private http: HttpClient) { }

addComment(petId:number,comment:Comment):Observable<any>{

  const url=`${this.API_URL}Pets/${petId}/comments/add`;
  return this.http.post<any>(url,comment);
}


}
