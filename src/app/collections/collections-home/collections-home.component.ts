import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css']
})
export class CollectionsHomeComponent{
  data =[
  {name:'Ali' , age: "24" , job:'engineer' , employed : true },
  {name:'Reza' , age: "20" , job:'UI Designer', employed : true },
  {name:'Sara' , age: "19" , job:'DataBase Manager', employed : false },
  ];
headers =[
  {key: 'name' , value:'Name' , show:true},
  {key: 'age' , value:'Age' , show:true},
  {key: 'job' , value:'Job', show:false},
  {key: 'employed' , value:'Employed' , show:true},
  ];
}
