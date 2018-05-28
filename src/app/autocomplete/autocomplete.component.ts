import { ViacepService } from './../viacep.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.sass']
})
export class AutocompleteComponent implements OnInit {

  constructor(private viaCep: ViacepService) { }

  ngOnInit() {
  }

  getAdress(cep) {
    this.viaCep.getViaCep(cep.target.value);
    this.viaCep.getCepObservable.subscribe(console.log, console.error)
  }

}
