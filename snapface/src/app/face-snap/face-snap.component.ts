import { FaceSnap } from './../models/face-snap.model';
import { Component, OnInit, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService,
              private router: Router){}

  ngOnInit(){
    this.buttonText = "Oh Snap!";
  }

  onSnap(){
    if(this.buttonText === "Oh Snap!"){
      //this.faceSnap.snaps++;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id, "snap"); //incrementation de snap number en utilisant le service
      this.buttonText = "Ooops Unsnap!";
    }
    else{
      //this.faceSnap.snaps--;
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,"unsnap"); //decrementation de snap number en utilisant le service
      this.buttonText = "Oh Snap!";
    }
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

  /*
    J'ai utilisé la syntaxe template literal (avec les backticks `) pour rendre plus lisible la chaîne de caractères passée
    à la méthode.
    Pour plus d'informations sur cette syntaxe ultra utile--> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
  */

}
