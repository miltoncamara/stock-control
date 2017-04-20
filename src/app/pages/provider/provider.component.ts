import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: [
    './provider.component.scss'
  ]
})
export class ProviderComponent implements OnInit {
  maskCEP: any = [/[1-9]/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/,/\d/];
  
  constructor() { }
  ngOnInit() {}
}
