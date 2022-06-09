export interface Movie{
    id: Number;
    name: String;
    imbdRating: Number;
    category: String;
    genre: String;
    releaseDate: String;
    actorName: String;
    actressName: String;
}
export interface Theatre{
    id:Number;
    name:String;
    movieName:String;
    city:String;
}
export interface Show{
    time:String;
    theatreId:Number;
    movieId:Number;
}
export interface Seat{
    number:Number;
    showTime:String;
    theatreId:Number;
    movieId:Number;
    ticketId:Number;
    availability:String;
}
export class SeatDBModel {
    Number: Number;
    ShowTime : String;
    TheatreId: Number;
    MovieId : Number;
    TicketId: Number;
    Availability: String;
    constructor(
        Number: Number,
        ShowTime : String,
        TheatreId: Number,
        MovieId : Number,
        TicketId: Number,
        Availability: String
    ) {
        this.Number = Number;
        this.ShowTime = ShowTime;
        this.TheatreId = TheatreId;
        this.MovieId = MovieId;
        this.TicketId = TicketId;
        this.Availability = Availability;
    }
}

export class TicketModel {
    Id: Number;
    UserName: String;
    NumberOfSeats: Number;
    ShowTime: String;
    TheatreId: Number;
    MovieId: Number;
    constructor(
        Id: Number,
        UserName: String,
        NumberOfSeats: Number,
        ShowTime: String,
        TheatreId: Number,
        MovieId: Number
    ) {
        this.Id = Id;
        this.UserName = UserName;
        this.NumberOfSeats = NumberOfSeats;
        this.ShowTime = ShowTime;
        this.TheatreId = TheatreId;
        this.MovieId = MovieId;
    }
}



