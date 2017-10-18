import { Country } from './Country';


export class CountryRepository {
    static countries : Country[]  =
     [ 
              { Code : 'In', Name : "India", Capital : "New Delhi"},
              { Code : 'us', Name : "USA", Capital : "Washington DC"},
         ];

    static  GetCountries() : Country[] 
    {
         return this.countries; 
    }
}