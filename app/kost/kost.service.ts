import { Injectable } from '@angular/core';
import { Kost } from '../kost/kost.model';
import { Fasilitas } from '../shared/fasilitas.model';
import { KomentarListService } from '../komentar-list/komentar-list.service';
import { Subject } from 'rxjs/Subject';
@Injectable(

)
export class KostService {
kostChanged=new Subject<Kost[]>();

  private kost: Kost[]=[
    new Kost('Kos Bapak Salam','Alamat Jl Semanggi Barat No.17A, Fasilitas parkiran luas Kamar mandi dalam free wifi,air,kasur spring bed dan harga kos harus dibayar langsung 1tahun dengan harga kos an 5jt ,hub bapak salam 08652324312.','../src/app/img/10.jpg',
  [
    new Fasilitas('Sisa Kamar ',1),
  ]),
  new Kost('Kos Putra Rojak','Alamat Jl Senggani No.3, Fasilitas parkir sepeda montor dan mobil kamar mandi luar wifi bayar per bulan 20rb ,air gratis,kasur busa dan harga 4,5jt per tahun ,hub bapak ridwan 08237546357','../src/app/img/2.jpeg',
[
  new Fasilitas('Sisa Kamar ',2),
]), 
new Kost('Kos Putri Iswanu','Alamat Jl Sultan Agung No.20, Fasilitas kamar mandi luar parkiran hanya untuk beberapa montor wifi free dan juga air free kasur busa,dan harga kos 350rb per bulan,hub solikin 08234546283 ,','../src/app/img/3.jpg',
[
  new Fasilitas('Sisa Kamar ',3),
]), 
new Kost('Kos Putri Ridwan','Alamat Jl Sunan Ampel No. 13, Fasilitas Kamar mandi dalam parkiran luas menampung mobil bisa free wifi dan air bayar 20rb per bulan kasur spring bed dan tv , harga kos harus dibyar per tahun dengan harga 5jt ,hub 08343667464746','../src/app/img/4.jpg',
[
  new Fasilitas('Sisa Kamar ',4),
]), 
new Kost('Kos Putra Adam','Alamat Jl Melawai No 4, Fasilitas kamar mandi luar ,parkiran bisa menampung mobil dan sepeda montor free wifi dan air kasur busa dan tv yang terdapat di lobi kos aja ,harga kos dengan 5,5jt per tahun hub sodiq 08243534321 ','../src/app/img/5.jpg',
[
  new Fasilitas('Sisa Kamar ',5),
]),  
];

  getKosts(){
    return this.kost.slice();
  }

  addFasilitassKomentarList(fasilitass: Fasilitas[]){
    this.slsService.addFasilitass(fasilitass);
  }
  getKost(index:number){
    return this.kost [index] ;
  }
  //tambahkan parameter pada construktor
constructor(private slsService: KomentarListService) { 
}
setKosts(kost: Kost[]){
  this.kost = kost;
  this.kostChanged.next(this.kost.slice());
}
addKost(kost: Kost){
this.kost.push(kost);
this.kostChanged.next(this.kost.slice());
}
updateKost(index: number, newKost: Kost){
this .kost[index]= newKost;
this.kostChanged.next(this.kost.slice());
}
deleteKost(index: number){
  this.kost.splice(index, 1);
  this.kostChanged.next(this.kost.slice());
}
}