import { Component, OnInit } from '@angular/core';
import { CHURCHES } from './shared/churches';

@Component({
  selector: 'app-churches',
  templateUrl: './churches.component.html',
  styleUrls: ['./churches.component.css']
})
export class ChurchesComponent implements OnInit {

  churches = CHURCHES;

  constructor() { }

  ngOnInit() {
  }
}
