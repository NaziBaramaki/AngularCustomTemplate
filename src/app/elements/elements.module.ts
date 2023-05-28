import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ElementsRoutingModule } from './elements-routing.module';
import { ElementsHomeComponent } from './elements-home/elements-home.component';
import { PlaceholderComponent } from './placeholder/placeholder.component';
import { SegmentComponent } from './segment/segment.component';
import { DeviderComponent } from '../shared/devider/devider.component';
import { SharedModule } from '../shared/shared.module';
import { RepeatTemplateDirective } from './repeat-template.directive';


@NgModule({
  declarations: [
    ElementsHomeComponent,
    PlaceholderComponent,
    SegmentComponent,
    RepeatTemplateDirective
  ],
  imports: [
    CommonModule,
    ElementsRoutingModule,
    SharedModule
  ],
  // exports : [ElementsHomeComponent],
})
export class ElementsModule { }
