import { Component,Inject, OnInit } from '@angular/core';
import { Show } from '../ViewModels';
import {HttpClient} from'@angular/common/http';
import {ShowsService} from '../services/shows.service';
import {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-view-shows',
  templateUrl: './view-shows.component.html',
  styleUrls: ['./view-shows.component.scss']
})
export class ViewShowsComponent implements OnInit {
  shows: Show[]=[];
  id:any;
  movieId:any;
  constructor(private showService:ShowsService,private route:ActivatedRoute,private http:HttpClient) { }
  ngOnInit(): void {
  this.id=this.route.snapshot.params['id'];
  //this.movieId=this.route.snapshot.params['movieId'];
   this.getShows();
  }
  
  getShows(){
    this.showService.getShows(this.id)
    .subscribe(
      response=>{
        this.shows=response;
      }
    );
    }


}
