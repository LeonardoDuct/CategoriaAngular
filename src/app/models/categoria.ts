import { Filmes } from "./filmes";

export abstract class CategoriaBase {

  constructor(
    public nome: string,
  ) {
  }
}

export class Categoria extends CategoriaBase {

  constructor(
    public _id: string,
    nome: string
  ) {
    super(nome);
  }

}

export class CategoriaDetalhes extends CategoriaBase {

  constructor(
    public filmes: Filmes[],
    nome: string
  ) {
    super(nome);
  }

}
