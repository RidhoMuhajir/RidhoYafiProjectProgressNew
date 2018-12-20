import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { KostService } from '../kost.service';



@Component({
  selector: 'app-kost-edit',
  templateUrl: './kost-edit.component.html',
  styleUrls: ['./kost-edit.component.css']
})
export class KostEditComponent implements OnInit {
  id:number;
  editMode=false;
kostForm: FormGroup;
  constructor( private route:ActivatedRoute,
  private kostService: KostService,
private router: Router ) { }

  ngOnInit() {
    this.route.params
    .subscribe(
      (params:Params)=>{
        this.id=+params['id'];
        this.editMode=params['id']!=null;
        this.initForm();

        console.log(this.editMode);
      }
    )
    
  }
  onSubmit(){
  if(this.editMode){
    this.kostService.updateKost(this.id, this.kostForm.value);
  }else{
    this.kostService.addKost(this.kostForm.value);
  }
  this.onCancel();
  }
  onAddFasilitas(){
    (<FormArray>this.kostForm.get('fasilitass')).push(
      new FormGroup({
        'perlengkapan' : new FormControl(null,Validators.required),
        'jumlah':new FormControl(null,[Validators.required,Validators.pattern(/^[1-9]+[0-9]*$/)
      ])
      })
    );
  }
  onDeleteFasilitas(index: number){
    (<FormArray>this.kostForm.get('fasilitass')).removeAt(index);
  }
  onCancel(){
   this.router.navigate(['../'], {relativeTo: this.route});
  }
  private initForm(){
    let kostName='';
    let kostImagePath='';
    let kostDescription='';
    let kostFasilitass = new FormArray([]);
    if(this.editMode){
      const kost=this.kostService.getKost(this.id);
      kostName=kost.name;
      kostImagePath=kost.imagePath;
      kostDescription=kost.description;
      if (kost['fasilitas']){
        for(let fasilitas of kost.fasilitas){
          kostFasilitass.push(
           new FormGroup({
             'perlengkapan' : new FormControl(fasilitas.perlengkapan,Validators.required),
             'jumlah' : new FormControl(fasilitas.jumlah,[Validators.required,,Validators.pattern(/^[1-9]+[0-9]*$/)
           ])
           }) 
          );

        }
      }
        }
this.kostForm =new FormGroup({
  'name': new FormControl(kostName,Validators.required),
  'imagePath':new FormControl(kostImagePath,Validators.required),
  'description':new FormControl(kostDescription,Validators.required),
  'fasilitass': kostFasilitass
});
  }

}
