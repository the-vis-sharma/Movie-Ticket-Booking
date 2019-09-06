import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  baseUrl = "http://localhost:8080/api/v1/";

  favourite = "favourites"

  movies = "movies"

  constructor(private http : HttpClient) { }

  public getMovieList() : Observable<any> {
    return this.http.get(this.baseUrl + this.movies);
  }

  public getFavouriteList(username: string) : Observable<any> {
    return this.http.get(this.baseUrl + this.favourite + "?username=" + username);
  }


  public modifyComment(favId: string, comment: string) : Observable<any> {
    return this.http.put(this.baseUrl + this.favourite + "/" + favId + "?comment=" + comment, {});
  }

}
