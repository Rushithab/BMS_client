import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movie, SeatDBModel,TicketModel } from '../ViewModels';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  http: HttpClient;
  baseUrl: string;
  theatreId : any;
  movieId : any;
  showTime : any;
  selectedSeats : any;
  seats: any[];
  movie: any;
  bookedSeats: any[];
  theatre: any;
  userName: any;
  tickets: any[];
  ticket: any;
  ticketNumber: any;
  currentTicket: any;
  seatPriceRate: number = 100;
  ticketPrice: number = 0;

  constructor(private _router: Router,private _Activatedroute:ActivatedRoute,http: HttpClient) {
    this._Activatedroute.paramMap.subscribe(params => {
      this.userName = params.get('userName');
      this.theatreId = params.get('theatreId');
      this.movieId = params.get('movieId');
      this.showTime = params.get('showTime');
      this.selectedSeats = params.get('seats');
    });

    this.http = http;
    //this.baseUrl = baseUrl;
  
    this.seats = this.selectedSeats.split(",");
    this.ticketPrice = this.seats.length * this.seatPriceRate;
    this.http.get<any>('https://localhost:7111/' + 'api/movie/' + this.movieId).subscribe(result => {
      this.movie = result; 
    }, error => console.error(error));
    this.http.get<any>('https://localhost:7111/' + 'api/theatre/id/' + this.theatreId).subscribe(result => {
      this.theatre = result;
    }, error => console.error(error));
    this.currentTicket = new TicketModel(0,this.userName,this.seats.length,this.showTime,this.theatreId,this.movieId);
    this.http.post('https://localhost:7111/' + 'api/ticket',this.currentTicket).subscribe(result => {
      alert(result);
    }, error => console.error(error));
    
  }

  ngOnInit() {
    
    this.http.get<any[]>('https://localhost:7111/' + 'api/ticket').subscribe(result => {
      this.tickets = result;
      this.ticket = this.tickets[this.tickets.length - 1];
      for(let seat of this.seats){
        var currentSeat = new SeatDBModel(Number(seat),this.showTime,this.theatreId,this.movieId,this.ticket.id,'Available');
        this.http.put('https://localhost:7111/' + 'api/seat/ticket/' + this.ticket.id, currentSeat).subscribe(result => {
          //alert(result);
        }, error => console.error(error));
      }
    }, error => console.error(error));
  }

}
