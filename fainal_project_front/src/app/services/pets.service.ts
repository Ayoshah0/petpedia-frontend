import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../Modele/Pet.model';

@Injectable({
  providedIn: 'root'
})
export class PetsService {

   readonly API_URL='http://localhost:8080';
  
   constructor(
    private http: HttpClient
  ) { }


  getAllPets(): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.API_URL}/Pets`);
  }

  getPetByType(type: string): Observable<Pet[]> {
    const url = `${this.API_URL}/Pets/${type}`;
    return this.http.get<Pet[]>(url);
  }
  
  deletePet(name:string):Observable<string>{
    const url=`${this.API_URL}/Pets/delete/${name}`;
    return this.http.delete<string>(url);
  }

 updatePet(name: string, pet: Pet): Observable<string> {
  const url = `${this.API_URL}/Pets/Update/${name}`;
  return this.http.put<string>(url, pet);
}

}
