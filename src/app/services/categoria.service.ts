import { Injectable, Inject } from '@angular/core';
import { ReplaySubject } from 'rxjs';
import { API_BASE } from '../app.config';
import { Categoria, CategoriaDetalhes } from '../models/categoria';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CategoriaService {

  private _categorias$ = new ReplaySubject<Categoria[]>(1);
  public categorias$ = this._categorias$.asObservable();

  private _categoriaSelecionada$ = new ReplaySubject<CategoriaDetalhes>(1);
  public categoriaSelecionada$ = this._categoriaSelecionada$.asObservable();

  constructor(private httpClient: HttpClient, @Inject(API_BASE) private apiBase: string) {
    this.httpClient.get<Categoria[]>(
      `${this.apiBase}/categorias`,
    ).subscribe(categorias => this._categorias$.next(categorias));
  }

  public selecionaCategoria(c: Categoria) {
    this.httpClient.get<CategoriaDetalhes>(
      `${this.apiBase}/categorias/${c._id}`,
    ).subscribe(categoria => {
      const categoriaDetalhes = new CategoriaDetalhes(
        categoria.filmes.map((filme : any) => ({
          codigo: filme._id,
          nome: filme.nome,
          ano: filme.ano,
          elenco: filme.elenco,
          diretor: filme.diretor,
          img:filme.img,
        })),
        categoria.nome,
      );
      this._categoriaSelecionada$.next(categoriaDetalhes);
    });
  }
}
