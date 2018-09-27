import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MoovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MoovieProvider {
  
  private baseApiPath:string = "https://api.themoviedb.org/3";
  

  constructor(public http: HttpClient) {
    console.log('Hello MoovieProvider Provider');
  }

  getLatestMovies(){

    //MÉTODOS API - GET, POST, PUT, DELETE 
    return this.http.get(this.baseApiPath + "/movie/latest"+ this.getApiKey());
    
  }
  getMovieDetails(filmeid){

    //MÉTODOS API - GET, POST, PUT, DELETE 
    return this.http.get(this.baseApiPath + `/movie/${filmeid}`+ this.getApiKey());
    
  }

  getPopularMovies(){

    return this.http.get(this.baseApiPath + "/movie/popular"+ this.getApiKey());

  }

  private getApiKey ():string{

    return "?api_key=##############";

  }
    

}
