import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Added for Router
import {RouterModule, Router} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SingleViewComponent } from './single-view/single-view.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RetriveDataService } from './retrive-data.service';
import { HttpClientModule } from '@angular/common/http';
import { FilterDataPipe } from './filter-data.pipe';
import { OrderDataPipe } from './order-data.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Add in facilities
import { OrderModule } from 'ngx-order-pipe';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';

//Added for toast message
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SingleViewComponent,
    NotFoundComponent,
    FilterDataPipe,
    OrderDataPipe
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    OrderModule,
    Ng4LoadingSpinnerModule,
    CommonModule,
    BrowserAnimationsModule,

    ToastrModule.forRoot({
      timeOut: 2000,
      positionClass: 'toast-top-right',
      preventDuplicates: true,
    }),

    RouterModule.forRoot([
      {path :'home',component:HomeComponent},
      {path : '',redirectTo:'home',pathMatch:'full'},
      {path :'got/:entityName/:compId',component:SingleViewComponent},
      {path :'**',component:NotFoundComponent}
    ])
  ],
  providers: [RetriveDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
