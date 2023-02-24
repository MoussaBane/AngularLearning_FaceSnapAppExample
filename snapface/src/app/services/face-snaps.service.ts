import { FaceSnap } from './../models/face-snap.model';
// un service n'a pas de méthode  ngOnInit()
// car les services ne sont pas instanciés de la même manière que les components
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
      // vos FaceSnap ici
      {
        id: 1,
        title:"Hamadoun Bary",
        description:"Un ami d'enfance tres genial!",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwB76H7CWti52lHvyq0b6xpmk2-VSJIvRvug&usqp=CAU",
        createdDate: new Date(),
        snaps: 7,
        location: "Konya/Turkiye TR"
      },
      {
        id: 2,
        title:"Atcheke",
        description:"Un plat a un gout inexplicable!!! 🥘",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcog-xMrLxkvvMF1Wh86MKGn0WLcrwEcYQ_A&usqp=CAU",
        createdDate: new Date(),
        snaps: 56,
        location: "Bamako/Mali"
      },
      {
        id: 3,
        title:"Jeep Grand Cherokee 🚗",
        description:"Ma voiture preferee!!!",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBCS5aGA-QTn1L95Hoe2-uyVk46g9QjKOWw&usqp=CAU",
        createdDate: new Date(),
        snaps: 23
      },
      {
        id: 4,
        title:"Atcheke",
        description:"Un plat a un gout inexplicable!!! 🥘",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcog-xMrLxkvvMF1Wh86MKGn0WLcrwEcYQ_A&usqp=CAU",
        createdDate: new Date(),
        snaps: 56,
        location: "Bamako/Mali"
      },
      {
        id: 5,
        title:"Jeep Grand Cherokee 🚗",
        description:"Ma voiture preferee!!!",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbBCS5aGA-QTn1L95Hoe2-uyVk46g9QjKOWw&usqp=CAU",
        createdDate: new Date(),
        snaps: 23
      },
      {
        id: 6,
        title:"Hamadoun Bary",
        description:"Un ami d'enfance tres genial!",
        imageUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwB76H7CWti52lHvyq0b6xpmk2-VSJIvRvug&usqp=CAU",
        createdDate: new Date(),
        snaps: 7,
        location: "Konya/Turkiye TR"
      }
  ]

  getAllFaceSnaps(): FaceSnap[] {
      return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);

    if(!faceSnap){ // Le faceSnap n'existe pas
      throw new Error("FaceSnap Not Found!!!");
    }
    else{
      return faceSnap;
    }
  }
  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void{
    const faceSnap = this.getFaceSnapById(faceSnapId);

    //Si le FaceSnap existe en fonction de 'snap' et 'unsnap' ça incremente ou decremente le nombre de snap
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }


}
