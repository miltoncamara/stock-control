import {Injectable} from "@angular/core";
import {AngularFire, AuthProviders, AuthMethods, FirebaseListObservable} from 'angularfire2';

@Injectable()
export class FirebaseDataService {
  public providers: FirebaseListObservable<any>;
  public users: FirebaseListObservable<any>;
  public displayName: string;
  public email: string;
  constructor(public af: AngularFire) {
    this.providers = this.af.database.list('/providers/-KiCIsXuQHPildp7Fzt7');
  }

  save(razaoSocial, nomeFantasia, endereco, cidade, cep) {
    var provider = {
      razaoSocial: razaoSocial,
      nomeFantasia: nomeFantasia,
      endereco: endereco,
      cidade: cidade,
      cep: cep,
      timestamp: Date.now()
    };
    this.providers.push(provider);
  }
}