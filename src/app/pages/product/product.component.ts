import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseDataService } from '../../providers/firebase.provider';
import { FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: [
    './product.component.scss'
  ]
})
export class ProductComponent implements OnInit {
  public productForm: FormGroup;

  constructor(private fb: FormBuilder) {
    //this.providers = this.afService.providers;

    this.productForm = this.fb.group({
      productType: ['', Validators.compose([Validators.required])],
      productName: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() { }
}
