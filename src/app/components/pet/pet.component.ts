import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Pet } from 'src/app/Modele/Pet.model';
import { CommentService } from 'src/app/services/comment.service';
import { PetsService } from 'src/app/services/pets.service';


@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent {
 
  Fishes: any[] = [];
  editingPet: Pet | null = null;
  filteredFishes:any[]=[];
  searchName:string='';
 
  registerForm:FormGroup;
  nameInput: FormControl;
  petType: FormControl;
  fact: FormControl;
  img_url: FormControl;



  constructor( private http:HttpClient ,private petsServie:PetsService,private commentService:CommentService){

 this.nameInput=new FormControl('', Validators.required);
 this.petType= new FormControl('', Validators.required);
 this.fact=new FormControl('', Validators.required);
 this.img_url= new FormControl('', Validators.required);

 this.registerForm=new FormGroup({

  name:this.nameInput,
  petType:this.petType,
  fact:this.fact,
  img_url:this.img_url,
 });

  }

  ngOnInit() {
    this.loadFishes(); 
  }

  
  

  onSubmit() {
    if (this.registerForm.valid) {
      if (this.editingPet) {
        
        this.onUpdate(this.editingPet);
      } else {
        
        const petData = this.registerForm.value;
  
        this.http.post('http://localhost:8080/pets/add', petData).subscribe(
          (response) => {
            console.log('Pet added successfully:', response);
            this.loadFishes(); 
            this.resetForm(); 
          },
          (error) => {
            console.error('Error adding pet:', error);
          }
        );
      }
    }
  }

  editPet(pet: Pet) {
    this.editingPet = pet; 
    this.registerForm.patchValue(pet); 
  }

  resetForm() {
    this.registerForm.reset();
    this.editingPet = null;
  }

  

search() {
  this.filteredFishes = this.Fishes.filter(fish =>
    fish.name.toLowerCase().includes(this.searchName.toLowerCase())
  );
}

  onUpdate(pet: Pet) {
    if (this.registerForm.valid) {
      const petData = this.registerForm.value;
  
      this.petsServie.updatePet(pet.name, petData).subscribe(
        (response) => {
          console.log('Pet updated successfully:', response);
          this.loadFishes(); 
          this.resetForm(); 
        },
        (error) => {
          console.error('Error updating pet:', error);
        }
      );
    }
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
