import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-views-home',
  templateUrl: './views-home.component.html',
  styleUrls: ['./views-home.component.css']
})
export class ViewsHomeComponent implements OnInit {
   data=[
    {value: 22 , label: '# of users'},
    {value: 48 , label: '# of Likes'},
    {value: 10 , label: '# of Comments'},
  ];
  items = [
    { image : './assets/images/1.jpg' ,  titele:'Jungle' , description:'this is a fantastic jungle for walking'},
    { image : './assets/images/2.jpg' ,  titele:'Lake' , description:'this is a fantastic LAke for sightseeing'},
    { image : './assets/images/3.jpg' ,  titele:'Fall' , description:'this is a fantastic time in fall for visiting nature'},
  ]
  constructor(){}
  ngOnInit(): void{}
}
