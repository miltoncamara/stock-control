import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirebaseDataService } from '../../providers/firebase.provider';
import { FirebaseListObservable } from "angularfire2";

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: [
    './provider.component.scss'
  ]
})
export class ProviderComponent implements OnInit {
  public providerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    //this.providers = this.afService.providers;

    this.providerForm = this.fb.group({
      nomeFantasia: ['', Validators.compose([Validators.required])],
      razaoSocial: ['', Validators.compose([Validators.required])],
      cep: ['', Validators.compose([Validators.required])],
      endereco: ['', Validators.compose([Validators.required])],
      cidade: ['', Validators.compose([Validators.required])]
    });
  }

  ngOnInit() { }
}
