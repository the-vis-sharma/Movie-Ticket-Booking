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

  tickets = "tickets";

  constructor(private http : HttpClient) { }

  public getMovieList() : Observable<any> {
    return this.http.get(this.baseUrl + this.movies);
  }

  public getMovieDetailById(id : string) : Observable<any> {
    console.log("url : " + this.baseUrl + this.movies + "/"  + id)
    return this.http.get(this.baseUrl + this.movies + "/"  + id);
  }
  
  public getMovieDetailByTitle(title : string) : Observable<any> {
    console.log("url : " + this.baseUrl + this.movies + "?name="  + title);
    return this.http.get(this.baseUrl + this.movies + "?name="  + title);
  }

  public getMovieDetailByGenre(genre : string) : Observable<any> {
    console.log("url : " + this.baseUrl + this.movies + "?genre="  + genre);
    return this.http.get(this.baseUrl + this.movies + "?genre="  + genre);
  }

  public bookTicket(data) : Observable<any> {
    console.log("url : " + this.baseUrl + this.tickets)
    return this.http.post(this.baseUrl + this.tickets, data);
  }

  public getBoookedTickets(username : string) : Observable<any> {
    console.log("url : " + this.baseUrl + this.tickets)
    return this.http.get(this.baseUrl + this.tickets + "?username=" + username);
  }


  public getFavouriteList(username: string) : Observable<any> {
    return this.http.get(this.baseUrl + this.favourite + "?username=" + username);
  }


  public modifyComment(favId: string, comment: string) : Observable<any> {
    return this.http.put(this.baseUrl + this.favourite + "/" + favId + "?comment=" + comment, {});
  }

}
