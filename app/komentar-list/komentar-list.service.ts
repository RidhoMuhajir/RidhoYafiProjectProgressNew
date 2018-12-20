import { Injectable, EventEmitter } from '@angular/core';
import { Fasilitas } from'../shared/fasilitas.model';
import { Subject } from 'rxjs/Subject';
@Injectable({
  providedIn: 'root'
})
export class KomentarListService {
  FasilitasChange = new Subject<Fasilitas[]>();
  startedEditing =new Subject<number>();
  private fasilitass:Fasilitas[]=[
    
  ];
constructor() { }
getFasilitass(){
  return this.fasilitass.slice();
}
getFasilitas(index:number){
  return this.fasilitass[index];
}
addFasilitas(fasilitas:Fasilitas){
  this.fasilitass.push(fasilitas);
  this.FasilitasChange.next(this.fasilitass.slice());
}
addFasilitass(fasilitass: Fasilitas[]){
  this.fasilitass.push(...fasilitass);
  this.FasilitasChange.next(this.fasilitass.slice());
}
updateFasilitas(index: number, newFasilitas: Fasilitas){
  this.fasilitass[index] =newFasilitas;
  this.FasilitasChange.next(this.fasilitass.slice());


}
deleteFasilitas(index: number){
  this.fasilitass.splice(index, 1);
  this.FasilitasChange.next(this.fasilitass.slice());
}
}
