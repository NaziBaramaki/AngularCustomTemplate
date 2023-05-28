import { Component, Input, OnInit, OnChanges } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit,OnChanges{
@Input() data:any=[];
@Input() headers:any =[];
@Input() className ="basic";

addNewData(){
  this.data.push({name: 'new data' , age: 24 , job:'engineer' , employed : true });
  }
ngAfterContentChecked(){
  console.log(this.data);
}
ngOnInit():void{}
ngOnChanges():void{}
ngOnDestroy():void{
  console.log('ngOnDestroy');
}
}
