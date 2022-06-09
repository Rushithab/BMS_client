import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Theatre} from '../ViewModels'
import {Movie} from '../ViewModels'
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TheatresService {

  baseUrl='https://localhost:7111/api/theatre/moviename/'
  
  
  constructor(private http: HttpClient) { }
  getTheatreByMovieName(moviename): Observable<Theatre[]>
  {
    return this.http.get<Theatre[]>(this.baseUrl+moviename);
  }
}

