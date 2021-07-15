import { Component, Input, OnInit } from '@angular/core';

import { Recipie } from '../recipie.model';

@Component({
  selector: 'app-recipie-item',
  templateUrl: './recipie-item.component.html',
  styleUrls: ['./recipie-item.component.scss'],
})
export class RecipieItemComponent implements OnInit {

  @Input() recipieItem: Recipie;

  constructor() { }

  ngOnInit() {}

}
