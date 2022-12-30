import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Root } from 'src/Models/model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

city:string=''
data:any
temp:any
feels:any
date = new Date();
time = this.date.getHours()


  constructor(private http:HttpClient){}

  ngOnInit(): void {
    this.delhi()
  }
  value(event:any){
    this.city = event.target.value
    console.log(this.city);
    
    
  }
  delhi(){
    this.http.get<Root>('https://api.openweathermap.org/data/2.5/weather?q=delhi&appid=5fe36b192ffd1c36dffb6752bc1722b2').subscribe((data:any)=>{
      console.log(data);
      console.log(data.name);
     this.data = data
    this.temp = ((data.main.temp)-273.15).toFixed(0)
    this.feels = ((data.main.feels_like)-273.15).toFixed(0)
    
      
    })
  }

  getAllData(){
    this.http.get<Root>(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=5fe36b192ffd1c36dffb6752bc1722b2`).subscribe((data:any)=>{
      console.log(data);
      console.log(data.name);
      this.data=data
      
      this.temp = ((data.main.temp)-273.15).toFixed(0)
    this.feels = ((data.main.feels_like)-273.15).toFixed(0)
    
    })
  }

  

}
