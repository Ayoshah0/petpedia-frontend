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

  Fishes:Pet[]=[];
  newCommentText: string = '';
  

  
  constructor(private petsService: PetsService ,
     private route: ActivatedRoute ,
     private commentService:CommentService,
     private petsServie:PetsService
     
     ) {}



ngOnInit(): void {
 
 

  const type = 'fish'; 

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





  



