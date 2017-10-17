import { Country } from './Country';


export class CountryRepository {

    static  GetCountries() : Country[] 
    {
        var countries : Country[] = 
         [ 
              { Code : 'In', Name : "India", Capital : "New Delhi"},
              { Code : 'us', Name : "USA", Capital : "Washington DC"},
         ];

         return countries; 
    }
}