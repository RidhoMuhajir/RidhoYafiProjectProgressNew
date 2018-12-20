import { Fasilitas } from '../shared/fasilitas.model';
export class Kost{
  fasilitass: any;
    public name:string;
    public description:string;
    public imagePath:string;
    public fasilitas:Fasilitas[];

    constructor(name:string,desc:string,imagePath:string,fasilitas:Fasilitas[]){
        this.name=name;
        this.description=desc;
        this.imagePath=imagePath;
        this.fasilitas=fasilitas;
    }
}