import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover:string="https://cinebuzz.com.br/media/uploads/meninas_malvadas_a_nova_cinderela_e_mais_filmes_que_marcaram_os_anos_2000_e_amamos_ate_hoje.jpg"
  contentTitle:string="\"Meninas Malvadas\", \"As Branquelas\" e outros filmes dos anos 2000 que moram no meu coração"
  contentDescription:string="Uma seleção dos filmes mais inesquecíveis dos anos 2000, que sempre reassisto e continuam especiais para mim"

  constructor(){

  }

  ngOnInit(): void {
    
  }

}
