import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})

export class ProductCreateComponent implements OnInit {
  propLegal: string = 'qualquer';

  constructor() { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    this.propLegal = 'gabriel'
  }
}
