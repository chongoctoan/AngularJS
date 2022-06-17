import {Component} from "@angular/core";

@Component({
  selector: "app-classroom",
  templateUrl:"./classroom.component.html"
})

export  class ClassroomComponent {
  className:string = 'T2203E';
  studentNames:string[] = ["Do Duy Nam","Nguyen Nhgoc Hai","Cho Ngoc Toan"];
  studentAge: number[] = [20,17,26];
  studentPhone = [987654321,123456789,2312324324324];

  changeName(){
  this.className = "T2204M";
}
}
