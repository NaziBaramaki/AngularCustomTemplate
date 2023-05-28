import { Directive, ViewContainerRef , TemplateRef , Input } from '@angular/core';

@Directive({
  selector: '[appPlaceholder]'
})
export class PlaceholderDirective {
@Input('appPlaceholder') set render(times:number){
  for(let i=0; i<times; i++){
    this.ViewContainerRef.createEmbeddedView(this.templateRef,{});
  }
}
  constructor(private ViewContainerRef: ViewContainerRef ,
    private templateRef : TemplateRef<any>) { }

}
 