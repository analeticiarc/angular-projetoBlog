import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {dataFake} from '../../data/dataFake'

@Component({
  selector: 'app-content',
  imports: [],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit{

  photoCover:string=""
  contentTitle:string=""
  contentDescription:string=""
  publicationText1:string=""
  publicationText2:string=""
  publicationText3:string=""
  publicationText4:string=""
  publicationText5:string=""

  private id:string | null = "0"

  constructor(
    private route:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = (value.get("id"))
    )

    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(article => article.id === (id ?? "0"))[0];
  
    if (result) {
      this.contentTitle = result.title;
      this.contentDescription = result.description;
      this.photoCover = result.photo;
      this.publicationText1 = result.paragrafo1 ?? "";
      this.publicationText2 = result.paragrafo2 ?? "";
      this.publicationText3 = result.paragrafo3 ?? "";
      this.publicationText4 = result.paragrafo4 ?? "";
      this.publicationText5 = result.paragrafo5 ?? "";
    }
  }
  

}
