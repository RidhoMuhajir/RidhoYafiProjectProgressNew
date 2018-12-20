import { Component, OnInit, Input } from '@angular/core';
import { Kost } from '../kost.model';
import { KostService } from '../kost.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-kost-detail',
  templateUrl: './kost-detail.component.html',
  styleUrls: ['./kost-detail.component.css']
})
export class KostDetailComponent implements OnInit {
kost:Kost;
id:number;

  constructor(private kostService:KostService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.kost=this.kostService.getKost(this.id);
      }
    )
  }

  onAddKomentarList(){
    this.kostService.addFasilitassKomentarList(this.kost.fasilitass);
  }
  onEditKost(){
    this.router.navigate(['edit'],{relativeTo:this.route});
  }
  onDeleteKost(){
    this.kostService.deleteKost(this.id);
    this.router.navigate(['/kosts']);
  }

}
