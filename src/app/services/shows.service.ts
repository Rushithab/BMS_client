import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Show} from '../ViewModels'
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowsService {
  baseUrl='https://localhost:7111/api/show/theatre/'

  constructor(private http: HttpClient) { }
  getShows(id): Observable<Show[]>
  {
    return this.http.get<Show[]>(this.baseUrl+id);
  }
}
