import { Component, signal } from '@angular/core';
import { ExamApi } from '../../services/exam-api';
import { OnInit } from '@angular/core';
import { Countries } from '../../CountriesDetails.interface';
import { RouterModule } from '@angular/router';
import { Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-list-countries',
  imports: [RouterModule,FormsModule],
  templateUrl: './list-countries.html',
  styleUrl: './list-countries.css',
})
export class ListCountries {
countryDetials :any;

constructor(public countryAPIService: ExamApi){
this.countryDetials = this.countryAPIService.getCountries();
console.log(this.countryDetials)
}
}
