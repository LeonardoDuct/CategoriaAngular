import {
  Component,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaService } from '../../services/categoria.service';
import { Categoria } from '../../models/categoria';

@Component({
  selector: 'app-lista-categorias',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './lista-categorias.component.html',
  styleUrl: './lista-categorias.component.css',
})

export class ListaCategoriasComponent {

  public categoriaService = inject(CategoriaService);

  public categorias?: Categoria[];

  constructor(
  ) {
    // Perigo! Não foi gerenciada a desinscrição:
    this.categoriaService.categorias$.subscribe(
      ts => this.categorias = ts,
    );
  }

}
