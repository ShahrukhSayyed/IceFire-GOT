import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

//Own service to retrieve the data
import { RetriveDataService } from '../retrive-data.service';

//From NPM modules
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

//Location services
import { Location } from '@angular/common';

//Added for Toast message
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-single-view',
  templateUrl: './single-view.component.html',
  styleUrls: ['./single-view.component.css'],
  providers: [RetriveDataService]
})
export class SingleViewComponent implements OnInit {

  public singleItem;

  constructor(private _route: ActivatedRoute, private router: Router, public RetriveDataService: RetriveDataService, private spinnerService: Ng4LoadingSpinnerService, private location: Location, private toastr: ToastrService) {
    console.log("Single View Router Calling");
    this.spinnerService.show();
  }

  ngOnInit() {
    console.log("Single View NgOnInit called");
    //this.spinnerService.show();


    this._route.params.subscribe(param => {

      this.spinnerService.show();

      let myEntityName = this._route.snapshot.paramMap.get('entityName');
      let myCompId = this._route.snapshot.paramMap.get('compId');

      console.log("This is " + myEntityName + " and " + myCompId);
      // Do your stuff with id change.

      this.singleItem = this.RetriveDataService.getSingleItem(myEntityName, myCompId).subscribe(   //this is getting book data
        data => {
          setTimeout(() => {
            this.singleItem = data;
            console.log('single Item');
            console.log(this.singleItem);
            this.spinnerService.hide();
          }, 2000);  //passsing to get detail function

        },
        error => {
          console.log(error.errorMessage);
          this.spinnerService.hide();
          this.showError();
        });

    });


  }

  //for getting id of categories like character,house,books
  public getId = (a: string): string => {
    let pos = a.lastIndexOf('/');
    let id = a.substr(pos + 1);
    return id;
  }; //end

  public goBack = (): any => {
    this.location.back();
  }

  showError() {
    this.toastr.error('Go back to home page !', 'Not Found !');
  }


}
