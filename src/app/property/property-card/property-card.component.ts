import { Component, Input } from "@angular/core";

@Component(
  {
    selector:'app-property-card',
    //template:'<h1>i am a card</h1>',
    templateUrl:'property-card.component.html',
    //styles:['h1{font-style:italic;}']
    styleUrls:['property-card.component.css']
  }
)
export class PropertyCardComponent
{
@Input() Property:any
}
