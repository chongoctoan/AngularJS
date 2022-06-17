import {Component,Input} from "@angular/core";

@Component({
  selector: "app-student",
  templateUrl:"./student.component.html"
})

export  class StudentComonent {
  @Input("studentName") studentName !:string;
  @Input("studentAge") studentAge !:number;
  @Input("studentPhone") studentPhone !:number;

    // studentName:string = 'Cho Ngoc Toan';
    //
    // changeName(){
    //   this.studentName:"Nguyen Van Toan";
    // }
}
