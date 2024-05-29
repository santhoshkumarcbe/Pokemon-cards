import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { PokeResponseData } from '../models/poke.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  private http: HttpClient = inject(HttpClient);

  getPokeApiDataUrl = `https://api.pokemontcg.io/v2/cards`;

  getPokeApiData(): Observable<PokeResponseData> {
    return this.http.get<PokeResponseData>(this.getPokeApiDataUrl);
  }
}
