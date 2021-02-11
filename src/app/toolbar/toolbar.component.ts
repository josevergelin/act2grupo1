import { Component, Output, EventEmitter} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {

  @Output() dandoClick = new EventEmitter<number>();
  onclickServicios(){
    this.dandoClick.emit(1);
  }
  onclickEquipo(){
    this.dandoClick.emit(2);
  }
  onclicksPortafolio(){
    this.dandoClick.emit(3);
  }
  onclickEscribenos(){
    this.dandoClick.emit(4);
  }
}
