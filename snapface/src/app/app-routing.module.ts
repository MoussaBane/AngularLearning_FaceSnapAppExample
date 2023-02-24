import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { LangingPageComponent } from './langing-page/langing-page.component';
import { SingleFaceSnapComponent } from './single-face-snap/single-face-snap.component';

//Ce tableau va lier les routes de votre application (les différentes URL) aux components correspondants.
//une première route  facesnaps  qui affichera le component FaceSnapListComponent
const routes: Routes = [
  { path: 'facesnaps/:id' , component: SingleFaceSnapComponent}, // :id  spécifient que ce qui se trouvera après  facesnaps/  correspondra à un paramètre qui s'appellera  id
  { path: 'facesnaps', component: FaceSnapListComponent },
  { path: '', component: LangingPageComponent} //Pour la page vide/La page d'accueil
];


//Pour enregistrer ces routes dans votre application, il faut les passer au routeur en passant un objet ...
//de configuration au décorateur  @NgModule()  de AppRoutingModule
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
