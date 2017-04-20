import { Component, OnInit } from '@angular/core';
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
  public nomeFantasia: string;
  public razaoSocial: string;
  public cep: string;
  public endereco: string;
  public cidade: string;
  public providers: FirebaseListObservable<any>

  constructor(public afService: FirebaseDataService) 
  {
    this.providers = this.afService.providers;
  }

   save(){
    this.afService.save(this.razaoSocial, this.nomeFantasia, this.endereco, this.cidade, this.cep);
  }

  ngOnInit() { }
}
