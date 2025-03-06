import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string="https://cinebuzz.com.br/media/uploads/meninas_malvadas_a_nova_cinderela_e_mais_filmes_que_marcaram_os_anos_2000_e_amamos_ate_hoje.jpg"
  @Input()
  cardTitle:string="\Meninas Malvadas\", \"As Branquelas\" e outros filmes dos anos 2000 que moram no meu coração"
  @Input()
  cardDescription:string="Uma seleção dos filmes mais inesquecíveis dos anos 2000, que sempre reassisto e continuam especiais para mim"

  constructor() { }

  ngOnInit(): void {
  }

}