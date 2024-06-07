import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardService } from './services/card.service';
import { Poke } from './models/poke.model';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pokemon-cards';

  cardService: CardService = inject(CardService);
  pokes: Poke[] | null = null;
  displayImage: boolean = true;

  ngOnInit(): void {
    this.cardService.getPokeApiData(0, 1).subscribe({
      next: (pokeResponseData) => {
        // this.pokes = pokeResponseData.data;
        console.log(pokeResponseData);
      },
    });
  }

  // onMouseEnter(name: string) {
  //   const imageElId = `${name}-image`;
  //   const imageEl = document.getElementById(imageElId);
  //   const abilitiesElId = `${name}-abilities`;
  //   const abilitiesEl = document.getElementById(abilitiesElId);

  //   if (abilitiesEl && imageEl) {
  //     console.log('abilitiesEl', abilitiesEl);

  //     imageEl.style.display = 'none';
  //   }

  //   if (abilitiesEl !== null) {
  //     abilitiesEl.style.display = 'block';
  //   }
  // }

  // onMouseLeave(name: string) {
  //   const imageElId = `${name}-image`;
  //   const imageEl = document.getElementById(imageElId);
  //   if (imageEl !== null) {
  //     imageEl.style.display = 'block';
  //   }

  //   const abilitiesElId = `${name}-abilities`;
  //   const abilitiesEl = document.getElementById(abilitiesElId);
  //   if (abilitiesEl !== null) {
  //     abilitiesEl.style.display = 'none';
  //   }
  // }
}
