import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordion',
  templateUrl: './acordion.component.html',
  styleUrls: ['./acordion.component.css']
})
export class AcordionComponent implements OnInit {
  InterpolationTitle = 'Más Información';

  public isCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}

