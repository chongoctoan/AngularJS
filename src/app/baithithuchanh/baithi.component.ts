import {Component} from "@angular/core";
import {Child, IHeader} from "../interfaces/baithiheader";
import {HeaderService} from "../services/baithi.service";
import {IMail} from "../interfaces/mail.interface";

@Component({
  selector:"app-baithi",
  templateUrl:"./baithi.component.html",
  styleUrls:["./baithi.component.css"],
})
export class BaithiComponent{
  //@ts-ignore
  data: IHeader = null;


  constructor(private service: HeaderService) {

  }
  ngOnInit(){
    this.getData();
  }

  getData(){
    this.service.headerList()
      .subscribe( value=>{
        this.data = value;
      })
  }

}
