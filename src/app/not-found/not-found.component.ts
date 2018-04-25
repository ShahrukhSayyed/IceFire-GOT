import { Component, OnInit } from '@angular/core';

//Added for Toast message
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private toastr: ToastrService) { }

  ngOnInit() {
    this.showError();
  }


  showError() {
    this.toastr.error('Go back to home page !', 'Page Not Found !');
  }
}
