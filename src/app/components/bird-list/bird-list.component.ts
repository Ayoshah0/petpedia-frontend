import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/Modele/Pet.model';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-bird-list',
  templateUrl: './bird-list.component.html',
  styleUrls: ['./bird-list.component.css']
})
export class BirdListComponent {

  Fishes:Pet[]=[];


  constructor(private petsService: PetsService ,
    private route: ActivatedRoute ,
    private petsServie:PetsService
    
    ) {}

  ngOnInit(): void {

   
    
    const type = 'bird'; 
  
    this.petsService.getPetByType(type).subscribe((pets) => {
      this.Fishes = pets;
    });
  }

  onDelete(name: string) {
    this.petsServie.deletePet(name).subscribe(
      (response) => {
        console.log('Pet deleted successfully:', response);
        
        this.loadFishes();
      },
      (error) => {
        console.error('Error deleting pet:', error);
      }
    );
  }
  
  onLike(petId:number){
  
  }
  
  private loadFishes(){
    this.petsServie.getAllPets().subscribe(
      (data) => {
        this.Fishes = data;
      },
      (error) => {
        console.error('Error loading Fishes:', error);
      }
    );
  }

}
