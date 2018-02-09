import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'movie-list',
  templateUrl: 'movie-list.html'
})
export class MovieListComponent {
  @Input()
  data = [];
  constructor(
    public navCtrl: NavController
  ) {

  }

}
