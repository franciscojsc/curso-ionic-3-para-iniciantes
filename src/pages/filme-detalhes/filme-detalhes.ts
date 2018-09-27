import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';

/**
 * Generated class for the FilmeDetalhesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filme-detalhes',
  templateUrl: 'filme-detalhes.html',
})
export class FilmeDetalhesPage {
public filme;
public filmeid;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public movieProvider: MoovieProvider) {
  }

  ionViewDidEnter() {
    this.filme = this.navParams.get("filme");
   /*  this.movieProvider.getMovieDetails(this.filmeid).subscribe(data => {
      this.filme = data['results'];
      console.log(data);
    }, error =>{
      console.log(error);
    }); */
  }

}
