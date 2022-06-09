import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Movie} from '../ViewModels'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  baseUrl='https://localhost:7111/api/movie'

  constructor(private http: HttpClient) { }
  getAllMovies(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.baseUrl);
  }
}
