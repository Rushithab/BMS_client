import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
//import { ActivatedRoute } from '@angular/router';
import {MoviesService} from '../services/movies.service';
import { Movie } from '../ViewModels';
import {Theatre } from '../ViewModels';
import {TheatresService} from '../services/theatres.service';
import {Router,ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-view-movie',
  templateUrl: './view-movie.component.html',
  styleUrls: ['./view-movie.component.scss']
})
export class ViewMovieComponent implements OnInit {
  title='movies';
  movies: Movie[]=[];
  name:string;
  theatres: Theatre[]=[];
  constructor(private movieService:MoviesService,private route:ActivatedRoute,private http:HttpClient){

  }
  ngOnInit(): void {
    this.getAllMovies();
    
  }
  getAllMovies(){
    this.movieService.getAllMovies()
    .subscribe(
      response=>{
        this.movies=response;
      }
    );
  }
 /* getTheatreByMovieName(){
    this.name=this.route.snapshot.params['name'];
    this.http.get<Theatre[]>('https://localhost:7111/api/theatre/moviename'+this.moviename)
    .subscribe(
      response=>{
        this.theatres=response;
      }
    );
  }*/

}