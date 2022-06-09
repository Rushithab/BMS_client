import { Injectable } from '@angular/core';
import {HttpClient} from'@angular/common/http';
import {Seat} from '../ViewModels'
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SeatsService {
  baseUrl='https://localhost:7111/api/seat/showTime/'

  constructor(private http: HttpClient) { }
  getSeats(showTime,movieId,theatreId): Observable<Seat[]>
  {
    return this.http.get<Seat[]>(this.baseUrl+showTime + '/movie/' + movieId + '/theatre/' + theatreId);
  }
}
