import { Component, OnInit, OnDestroy } from '@angular/core';
import { Fasilitas } from '../shared/fasilitas.model';
import { KomentarListService } from '../komentar-list/komentar-list.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-komentar-list',
  templateUrl: './komentar-list.component.html',
  styleUrls: ['./komentar-list.component.css']
})
export class KomentarListComponent implements OnInit, OnDestroy {

  fasilitass:Fasilitas[];
  private subscription: Subscription;

  constructor(private slsService:KomentarListService) { }

  ngOnInit() {
  this.fasilitass=this.slsService.getFasilitass();
  this.subscription=this.slsService.FasilitasChange
  .subscribe(
    (Fasilitas:Fasilitas[])=>{
      this.fasilitass=Fasilitas;
    }
  );
  }
  onEditItem(index: number){
    this.slsService.startedEditing.next(index);
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

}
