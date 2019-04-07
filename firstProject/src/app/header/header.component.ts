import {Component} from "@angular/core";
import {template} from "@angular/core/src/render3";

@Component({
  selector: 'header',
  templateUrl: './header.component.html'
  //template: '<b>Header</b> {{test}}'
})
export class HeaderComponent {

  test: string = 'component';
}
