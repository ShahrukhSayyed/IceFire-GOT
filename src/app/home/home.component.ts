import { Component, OnInit } from '@angular/core';
import { RetriveDataService } from '../retrive-data.service';

//Own pipe to order the data by [Books/characters/houses]
import { OrderPipe } from 'ngx-order-pipe';


//From NPM modules
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//Added for Toast message
import { ToastrService } from 'ngx-toastr';


//imported the Http component to retrive the data
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [RetriveDataService]
})

export class HomeComponent implements OnInit {
  public allData = [];
  public final;
  public books;
  public characters;
  public houses;
  order: string = 'item.name';
  reverse: boolean = false;
  categoryValue: string ;
  nameValue: string ;
  
  constructor(public RetriveDataService: RetriveDataService, private orderPipe: OrderPipe, private spinnerService: Ng4LoadingSpinnerService,private toastr: ToastrService) {
    console.log("Home Component Constructor called...");
    
  }

  ngOnInit() {
    console.log("Home Component ngOnInit called...")
    this.spinnerService.show();

    this.books = this.RetriveDataService.getBooks().subscribe(   //this is getting book data
      data => {
        setTimeout(() => {
          this.books = data;
          //console.log('books');
          //console.log(this.books);
          this.allData.push(this.books);
          this.final = [].concat(...this.allData);
          console.log('Final after adding Books');
          console.log(this.final);

          this.spinnerService.hide();
        }, 2000);

      },
      error => {
        console.log(error.errorMessage);
      });

    this.houses = this.RetriveDataService.getHouses().subscribe(   //this is getting book data
      data => {
        setTimeout(() => {

          this.houses = data;
          //console.log('Houses');
          //console.log(this.houses);
          this.allData.push(this.houses);
          this.final = [].concat(...this.allData);
          console.log('Final after adding Houses');
          console.log(this.final);
          this.spinnerService.hide();

        }, 2000);

      },
      error => {
        console.log(error.errorMessage);
      });

    this.characters = this.RetriveDataService.getCharacters().subscribe(   //this is getting book data
      data => {
        setTimeout(() => {

          this.characters = data;
          //console.log('Characters');
          //console.log(this.characters);
          this.allData.push(this.characters);
          this.final = [].concat(...this.allData);
          console.log('Final after adding Characters');
          console.log(this.final);
          this.spinnerService.hide();

        }, 2000);

      },
      error => {
        console.log(error.errorMessage);
      });

  }

  //for getting id of categories like character,house,books
  public getId = (a: string): string => {
    let pos = a.lastIndexOf('/');
    let id = a.substr(pos + 1);
    return id;
  }; //end

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
      this.showSuccess(this.reverse);
    }

    this.order = value;
  }

  showSuccess(value: boolean) {
    if(value == true){
      this.toastr.success('In a descending way !', 'Data Sorted !');
    }
    else{
      this.toastr.success('In a Ascending way!', 'Data Sorted !');
    }    
  }

}
