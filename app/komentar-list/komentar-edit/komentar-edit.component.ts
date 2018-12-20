import { Component, OnInit,OnDestroy, ViewChild } from '@angular/core';
import { Fasilitas } from './fasilitas.model';
import { KomentarListService } from '../komentar-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-komentar-edit',
  templateUrl: './komentar-edit.component.html',
  styleUrls: ['./komentar-edit.component.css']
})
export class KomentarEditComponent implements OnInit, OnDestroy {
  @ViewChild('f') slForm:NgForm;
subscription:Subscription;
editMode= false;
editedItemIndex:number;
editedItem:Fasilitas;
  constructor(private slsService:KomentarListService) { }

  ngOnInit() {
    this.subscription=this.slsService.startedEditing
    .subscribe(
      (index: number)=>{
        this.editedItemIndex=index;
        this.editMode=true;
        this.editedItem=this.slsService.getFasilitas(index);
        this.slForm.setValue({
          perlengkapan: this.editedItem.perlengkapan,
          jumlah: this.editedItem.jumlah
        })
      }
    );
  }
onSubmit(form: NgForm){
  const value =form.value;
  const newFasilitas= new Fasilitas(value.perlengkapan,value.jumlah);
  if(this.editMode){
    this.slsService.updateFasilitas(this.editedItemIndex, newFasilitas);
  }else{
    this.slsService.addFasilitas(newFasilitas);
  }
  this.editMode= false;
  form.reset();
}
onClear(){
  this.slForm.reset();
  this.editMode=false;

}
onDelete(){
  this.slsService.deleteFasilitas(this.editedItemIndex);
this.onClear();
}
ngOnDestroy(){
this.subscription.unsubscribe();
}
}