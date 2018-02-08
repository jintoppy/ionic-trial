import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  results = [];
  constructor(
    public navCtrl: NavController,
    private http: HttpClient
  ) {

  }

  ngOnInit(){
    this.http.get('https://itunes.apple.com/search?media=all&term=abc')
    .subscribe((res: any) => {
      this.results = res.results;
      console.log(this.results);
    });
  }

}
