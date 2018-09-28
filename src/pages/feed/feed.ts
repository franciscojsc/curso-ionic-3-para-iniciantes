import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
import { FilmeDetalhesPage } from '../filme-detalhes/filme-detalhes';

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
  //adicionando o provider para realizar a injenção de dependência
  providers: [
    MoovieProvider
  ]
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

  public loading;
  public refresher;
  public isRefreshing;
  public infiniteScroll;

  //injetor o moovieProvider por construtor
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private movieProvider: MoovieProvider,
              public loadingCtrl: LoadingController) {
  }

  abreCarregando() {
    this.loading = this.loadingCtrl.create({
      content: 'Carregando filmes...'
    });
    this.loading.present();
  }

  fechaCarregando(){
    this.loading.dismiss();
  }
  
  public somaDoisNumero(num1:number, num2:number): void{
    alert(num1 + num2);
  }


  doRefresh(refresher) {
    this.refresher = refresher;
    this.isRefreshing = true;

    this.carregarFilmes();

  }

  
  //o any diz que é objeto javascript
  public lista_filmes = new Array<any>();

  public page = 1;

  //Quando entra na página
  ionViewDidEnter() {
    this.carregarFilmes();
  }

  abrirDetalhes(filme){
    console.log("funcão abrir detalhes",filme);
    this.navCtrl.push(FilmeDetalhesPage, {filme: filme});
  }

  doInfinite(infiniteScroll) {
    this.page++;
    this.infiniteScroll = infiniteScroll;
    this.carregarFilmes(true);
  }

  carregarFilmes(newpage: boolean = false){
    this.abreCarregando();
    this.movieProvider.getLatestMovies(this.page).subscribe(
      data=>{
          const response = (data as any);
          const objeto_retorno = response.results;

          if(newpage){
            this.lista_filmes = this.lista_filmes.concat(objeto_retorno);
            console.log(this.page);
            console.log(this.lista_filmes);
            this.infiniteScroll.complete();
          }else{
            this.lista_filmes = objeto_retorno;
          }

          this.fechaCarregando();
          if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
          }
      }, error => {
          console.log(error);
          this.fechaCarregando();
          if(this.isRefreshing){
              this.refresher.complete();
              this.isRefreshing = false;
          }
      }
    )
  }

}