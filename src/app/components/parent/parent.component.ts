import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {

  //step 4 =<step 5 in app.component.html
  currentItem="Data sharing works from parent to child using @Input property decorator";
}
