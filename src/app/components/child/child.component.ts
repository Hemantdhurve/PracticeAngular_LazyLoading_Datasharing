import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
 //step 1 =>(step 2 in child.html)
 //using "@Input" decorator i.e property decorator we can communicate between parent and child component
 //1st define which type data we need to print and store in a variable
 //value of item comes from the parent component

 @Input() item = '';


}
