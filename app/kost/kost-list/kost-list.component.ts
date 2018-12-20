import { Component, OnInit, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Kost } from '../kost.model';
import { KostService } from '../kost.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-kost-list',
  templateUrl: './kost-list.component.html',
  styleUrls: ['./kost-list.component.css']
})
export class KostListComponent implements OnInit, OnDestroy {

  //@Output() recipeWasSelected=new EventEmitter<Recipe>();
  kosts:Kost[];
  subscription: Subscription;
  //property:class recipe
  

  constructor(private kostService:KostService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.subscription = this.kostService.kostChanged
    .subscribe(
      (kosts: Kost[]) =>{
        this.kosts = kosts;
      }
    );
    this.kosts= this.kostService.getKosts();
  }
  onNewKost(){
    this.router.navigate(['new'],{relativeTo:this.route})
  }
  ngOnDestroy(){
this.subscription.unsubscribe();
  }
}
