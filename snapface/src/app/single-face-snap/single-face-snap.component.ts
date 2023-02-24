import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  faceSnap!: FaceSnap;

  buttonText!: string;


  constructor(private faceSnapsService: FaceSnapsService,
              private route: ActivatedRoute){

              }

  ngOnInit(){
    this.buttonText = "Oh Snap!";
    const faceSnapId = +this.route.snapshot.params['id']; //Le + qui fait le casting de string en number(integer)
    this.faceSnap = this.faceSnapsService.getFaceSnapById(faceSnapId);
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
}
