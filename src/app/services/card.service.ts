import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PokeResponseData } from '../models/poke.model';

@Injectable({
  providedIn: 'root',
})
export class CardService {
  constructor() {}

  private http: HttpClient = inject(HttpClient);

  getPokeApiData(offset: number, limit: number): Observable<any> {
    const getPokeApiDataUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return this.http
      .get<any>(getPokeApiDataUrl)
      .pipe(map((data) => data.results));
  }
  getPokeImageData(value: number): Observable<any> {
    const getPokeImageUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${value}.svg`;
    return this.http.get<any>(getPokeImageUrl);
  }
}
