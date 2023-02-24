// Pour pouvoir utiliser un service dans un component, il faut utiliser le système d'injection de dépendances
//(dependency injection ou DI)

import { FaceSnapsService } from './../services/face-snaps.service';
import { FaceSnap } from '../models/face-snap.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  constructor(private faceSnapsService : FaceSnapsService){}; //Le constructor pour linitialisation du service

  face_snaps! : FaceSnap[];
  ngOnInit(): void {

    //this.face_snaps = this.faceSnapsService.faceSnaps;
    this.face_snaps = this.faceSnapsService.getAllFaceSnaps();

  }
}
