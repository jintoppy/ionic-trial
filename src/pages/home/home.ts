import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppService} from '../../app/services/app.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  movies = [];
  constructor(
    public navCtrl: NavController,
    private service: AppService
  ) {

  }

  ngOnInit(){
    this.movies = this.service.getMovieInfo();
  }

}
