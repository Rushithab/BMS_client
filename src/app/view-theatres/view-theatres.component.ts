import { Component,Inject, OnInit } from '@angular/core';
import { Theatre } from '../ViewModels';
import {HttpClient} from'@angular/common/http';
import {TheatresService} from '../services/theatres.service';
import {Router,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-view-theatres',
  templateUrl: './view-theatres.component.html',
  styleUrls: ['./view-theatres.component.scss']
})
export class ViewTheatresComponent implements OnInit {
  title='theatres';
  theatres: Theatre[]=[];
  moviename:any;
  constructor(private theatreService:TheatresService,private route:ActivatedRoute,private http:HttpClient){

  }
  ngOnInit(): void {
  this.moviename=this.route.snapshot.params['name'];
   this.getTheatreByMovieName();

  }
  getTheatreByMovieName(){
    this.theatreService.getTheatreByMovieName(this.moviename)
    .subscribe(
      response=>{
        this.theatres=response;
      }
    );

  }
  
}