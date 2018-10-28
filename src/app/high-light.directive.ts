import { Directive, OnInit, HostListener, HostBinding } from '@angular/core';
import { maybeQueueResolutionOfComponentResources } from '@angular/core/src/metadata/resource_loading';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective implements OnInit {

  @HostBinding('style.backgroundColor') myBackgroundColor:string;
  @HostBinding('style.color')myColor:string;

  constructor() { }

  ngOnInit() {  
  }

  @HostListener('mouseenter') mouseEnterEvent (eventData:Event){
    this.myBackgroundColor = 'black';
    this.myColor= 'white';
  }

  @HostListener('mouseleave') mouseLeaveEvent (eventData:Event) {
    this.myBackgroundColor = 'transparent';
    this.myColor ='blue';
  }
}
