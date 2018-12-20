import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Kost } from '../../kost.model';
import { KostService } from '../../kost.service';

@Component({
  selector: 'app-kost-item',
  templateUrl: './kost-item.component.html',
  styleUrls: ['./kost-item.component.css']
})
export class KostItemComponent implements OnInit {

  @Input() kost:Kost;
  @Input() index:number;
  
  ngOnInit() {
  }
}
