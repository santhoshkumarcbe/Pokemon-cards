import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardService } from './services/card.service';
import { Poke } from './models/poke.model';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokemon-cards';

  cardService: CardService = inject(CardService);
  pokes: Poke[] | null = null;

  ngOnInit(): void {
    this.cardService.getPokeApiData().subscribe({
      next: (pokeResponseData) => {
        this.pokes = pokeResponseData.data;
        console.log(this.pokes[0]);
      },
    });
  }
}
