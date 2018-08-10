import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
})
export class FeedPage {

  public objeto_feed = {
    titulo: "Francisco Chaves",
    data: "November 5, 1955",
    descricao: "Estou criando um app invcrivel...",
    qtd_like: "129 Likes",
    qtd_comentario:"4 Comments",
    time_comentario: "11h ago"
  };

  //modificador de acesso, nome da varivel, tipo, valor
  public nome_usuario:string = "Francisco Chaves do código";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  public somaDoisNumero(num1:number, num2:number): void{
    alert(num1 + num2);
  }

  //Quando a página estiver carregada
  ionViewDidLoad() {
    console.log('ionViewDidLoad FeedPage');
    //this.somaDoisNumero(10, 99);
  }

}
