import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { MovieBannerCarouselComponent } from './movie-banner-carousel/movie-banner-carousel.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ViewMovieComponent } from './view-movie/view-movie.component';
import { ViewTheatresComponent } from './view-theatres/view-theatres.component';
import { ViewShowsComponent } from './view-shows/view-shows.component';
import { FooterComponent } from './footer/footer.component';
import { ViewSeatsComponent } from './view-seats/view-seats.component';
import { TicketComponent } from './ticket/ticket.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    MovieBannerCarouselComponent,
    LoginComponent,
    RegisterComponent,
    ViewMovieComponent,
    ViewTheatresComponent,
    ViewShowsComponent,
    FooterComponent,
    ViewSeatsComponent,
    TicketComponent,
    NavbarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'',component:HomeComponent},
      {path:'login',component:LoginComponent},
      {path:'register',component:RegisterComponent},
      { path: 'view-movie', component: ViewMovieComponent},
      { path: 'view-theatres/:name', component: ViewTheatresComponent},
      {path:'view-shows/:id',component:ViewShowsComponent},
      {path:'view-seats/:showTime/:movieId/:theatreId',component:ViewSeatsComponent},
      { path: 'ticket/:userName/:movieId/:theatreId/:showTime/:seats', component: TicketComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
