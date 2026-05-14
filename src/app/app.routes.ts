import { Routes } from '@angular/router';
import { ListCountries } from './components/list-countries/list-countries';
import { About } from './components/about/about';


export const routes: Routes = [
    {path: 'list-countries',component:ListCountries},
    {path: 'about', component:About}
];
