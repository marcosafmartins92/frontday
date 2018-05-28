import { Injectable } from '@angular/core';
import { Observable ,  Subject ,  Subscription } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { debounceTime, switchMap, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ViacepService {

  getCepSubject: Subject<any> = new Subject<any>()
  getCepObservable: Observable<any> = new Observable<any>();

  constructor(private http: HttpClient) {
    this.getCepObservable = this.getCepSubject.pipe(
      debounceTime(200),
      switchMap((cep) => {
          return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
      }),
      retry(2)
    );
   }

   getViaCep(cep: string) {
    this.getCepSubject.next(cep);
  }
}
