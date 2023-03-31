import { Component, OnInit, Input } from '@angular/core';
import { GetMoviesService } from '../get-movies.service';

@Component({
  selector: 'app-select-movie',
  templateUrl: './select-movie.component.html',
  styleUrls: ['./select-movie.component.css']
})
export class SelectMovieComponent implements OnInit {
  @Input() cityRelatedMovieData;

  // cityRelatedMovieUrl = "http://localhost:9988/cities/query/?search=Pune";
  // cityRelatedMovieData:any = [];

  movieUrl = "http://localhost:9988/movies";
  movieData:any = [];

  constructor(private random:GetMoviesService){}

  ngOnInit(): void {
    // this.random.getCityRelatedMovies(this.cityRelatedMovieUrl).subscribe((data)=>{
    //   this.cityRelatedMovieData = data;
    //   console.log(this.cityRelatedMovieData);
    // })
    this.random.getAllMovies(this.movieUrl).subscribe((data)=>{
      this.movieData = data;
      console.log("data from select movie component", this.movieData);
    })
  }

  addtoBookShow(movie:any){
    this.random.addToBookShow(movie);
  }


}
