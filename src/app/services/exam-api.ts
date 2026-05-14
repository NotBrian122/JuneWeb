import { inject, Injectable, signal } from '@angular/core';
import { Countries } from '../CountriesDetails.interface';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { take } from 'rxjs';
import { Inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ExamApi {
  //this is the public property of signal thats a list of countries
  public countries = signal<Countries[]>([]);
  private http = inject(HttpClient);
  //private apiUrl
  private apiUrl = 'https://restcountries.com/v3.1/all?fields=name,capital,flags,independent';


  getCountries(){
   this.http.get<any>(this.apiUrl)
  .pipe(take(1))
    .subscribe(
      (countryData) => {
      this.countries.set(countryData);
      console.log('country:', countryData);
      }
    );
  }
}
