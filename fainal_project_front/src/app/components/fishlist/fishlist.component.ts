import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pet } from 'src/app/Modele/Pet.model';
import {Comment} from 'src/app/Modele/Comment.model';
import { CommentService } from 'src/app/services/comment.service';
import { PetsService } from 'src/app/services/pets.service';

@Component({
  selector: 'app-fishlist',
  templateUrl: './fishlist.component.html',
  styleUrls: ['./fishlist.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class FishlistComponent implements OnInit{

  pet:Pet[]=[];
  newCommentText: string = '';
  
  factsVisibility: boolean[] = []; // مصفوفة لتتبع حالة كل كرت
  
  constructor(private petsService: PetsService ,
     private route: ActivatedRoute ,
     private commentService:CommentService,
     private petsServie:PetsService
     
     ) {}



// ngOnInit(): void {
 
 

//   const type = 'fish'; 

//   this.petsService.getPetByType(type).subscribe((pets) => {
//     this.Fishes = pets;
//   });
// }

ngOnInit(): void {
  const type = 'fish';

  this.petsService.getPetByType(type).subscribe((pets) => {
    this.pet = pets;
    // تهيئة حالة كل كرت لتكون false عند تحميل البيانات
    this.factsVisibility = Array(pets.length).fill(false);
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



// private loadFishes(){
//   this.petsServie.getAllPets().subscribe(
//     (data) => {
//       this.Fishes = data;
//     },
//     (error) => {
//       console.error('Error loading Fishes:', error);
//     }
//   );
// }
private loadFishes() {
  this.petsService.getAllPets().subscribe(
    (data) => {
      this.pet = data;
      // إعادة تهيئة الحالة بعد التحميل
      this.factsVisibility = Array(data.length).fill(false);
    },
    (error) => {
      console.error('Error loading Fishes:', error);
    }
  );
}

changevalue(index: number) {
  this.factsVisibility[index] = !this.factsVisibility[index]; // عكس الحالة للكرت المحدد
}



// addComment(fish: Pet): void {
//   if (this.newCommentText.trim() !== '') {
//     const newComment: Comment = new Comment(this.newCommentText);

//     this.commentService.addComment(fish.id, newComment).subscribe(
//       (response) => {
//         console.log('Comment added successfully:', response);
//         // Refresh the list of fishes after adding a comment
//         this.loadFishes();
//       },
//       (error) => {
//         console.error('Error adding comment:', error);
//       }
//     );

//     // Clear the new comment text
//     this.newCommentText = '';
//   }
// }
}





  



