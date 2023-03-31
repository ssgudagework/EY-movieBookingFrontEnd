import { Component } from '@angular/core';
import { GetMoviesService } from '../get-movies.service';

@Component({
  selector: 'app-details-form',
  templateUrl: './details-form.component.html',
  styleUrls: ['./details-form.component.css']
})
export class DetailsFormComponent{
  
  price:number;
  seatsVar:number=0;
  totalPrice:number=0;
  //totalCalc()

  constructor(private random:GetMoviesService){}
  
handleChange(event:any){
  this.seatsVar=event.target.value;
  console.log(this.seatsVar)
  
}
totalCalc(){
  this.totalPrice=this.seatsVar*this.price;
}
addUser(event){
  event.preventDefault()
  const errors = [];
  const target = event.target;
  const mobile = target.querySelector('#mobile').value;
  const email = target.querySelector('#email').value;
  const noOfSeats = target.querySelector('#noOfSeats').value;
  const totalPrice = target.querySelector('#totalPrice').value;
  
  if(errors.length ===0){
    this.random.addUser(mobile,email,noOfSeats,totalPrice).subscribe((data)=>{
      console.log(data);
    })
  }
 
  console.log(mobile,email,noOfSeats,totalPrice)
}
onClick(){
  alert('Your booking is confirmed!');
  alert('Redirecting you to booking details...Click OK to continue')
}

}
