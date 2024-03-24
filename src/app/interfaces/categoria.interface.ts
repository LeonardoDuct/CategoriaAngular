import { IFilmes } from "./filmes.interface";

export interface ICategoriaBase {
  _id: string;
  nome: string;
}

export interface ICategoria extends ICategoriaBase {
  nome: string;
}

export interface ICategoriaDetalhes extends ICategoriaBase {
  filmes: IFilmes[];
}
