import {Component,Input} from "@angular/core";
import {IWeather} from "../interfaces/weather.interface";
import {HttpClient, HttpParams} from "@angular/common/http";
import {WeatherService} from "../services/weather.service";

@Component({
  selector:'app-weather',
  templateUrl:'./weather.component.html'
})
export class WeatherComponent {
  //@ts-ignore
  data: IWeather = null;
  cityCode: string = 'hanoi';
  constructor(private service:WeatherService) {

  }

  // constructor(private httpClient: HttpClient) {
  // }

  ngOnInit() {
  this.getData();
  }

  getData() {
    // var parameters = new HttpParams();
    // parameters = parameters.append('q',this.cityCode);
    // parameters = parameters.append('appid','09a71427c59d38d6a34f89b47d75975c');
    // parameters = parameters.append('units','metric');
    // this.httpClient.get<IWeather>("https://api.openweathermap.org/data/2.5/weather",{
    //   params: parameters
    this.service.currentWeather(this.cityCode)
    .subscribe(value => {
        this.data = value;
      })
    }


  }
//   hanoi(){
//     this.cityCode='hanoi';
//     this.getData();
//   }
//   london(){
//     this.cityCode= 'london';
//     this.getData();
//   }
//   saigon(){
//     this.cityCode= 'saigon';
//     this.getData();
//   }
//   paris(){
//     this.cityCode= 'paris';
//     this.getData();
//   }
// }
