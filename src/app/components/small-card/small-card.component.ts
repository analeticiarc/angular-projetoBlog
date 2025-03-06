import { Component, Input, OnInit, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() 
  photoCover: string = "";
  @Input() 
  cardTitle: string = "";
  @Input() 
  cardDescription: string = "";
  @Input() 
  Id: string = "0";

  constructor(private cdRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    console.log("photoCover:", this.photoCover);
    console.log("cardTitle:", this.cardTitle);
    console.log("cardDescription:", this.cardDescription);

    // Força a detecção de mudanças
    this.cdRef.detectChanges();
  }

}
