import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pet } from '../Modele/Pet.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BirdService {
  readonly API_URL='http://localhost:8080';
  
   constructor(
    private http: HttpClient
  ) {}

  
  getPetByType(type: string): Observable<Pet[]> {
    const url = `${this.API_URL}/Pets/${type}`;
    return this.http.get<Pet[]>(url);
  }


}
