import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-langing-page',
  templateUrl: './langing-page.component.html',
  styleUrls: ['./langing-page.component.scss']
})
export class LangingPageComponent  implements OnInit{

  constructor(private router: Router){ } //  pour injecter le Router

  ngOnInit(){ /* TODO document why this method 'ngOnInit' is empty */ }

  onContinue(): void{
    this.router.navigateByUrl("facesnaps")
  }
}
