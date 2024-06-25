import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardService } from './services/card.service';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { pokeData } from './models/poke.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, AsyncPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokemon-cards';
  pokesData!: pokeData[];
  cardService = inject(CardService);
  displayImage: boolean = true;
  startIndex = 0;
  endIndex = 100;
  disablePreviousButton = this.startIndex === 0;

  ngOnInit(): void {
    this.getCardData();
  }

  onNext() {
    this.startIndex = this.endIndex;
    this.endIndex += 100;
    this.getCardData();
    this.disablePreviousButton = this.startIndex === 0;
  }

  onPrevious() {
    this.endIndex = this.startIndex;
    this.startIndex -= 100;
    this.getCardData();
    this.disablePreviousButton = this.startIndex === 0;
  }

  getCardData() {
    this.cardService.getPokeApiData(this.startIndex, this.endIndex).subscribe({
      next: (pokeResponseData) => {
        this.pokesData = pokeResponseData;
        console.log(pokeResponseData);
      },
    });
  }

  getImage(i: number): string {
    let ImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${
      i + this.startIndex
    }.svg`;
    return ImageUrl;
  }
}
