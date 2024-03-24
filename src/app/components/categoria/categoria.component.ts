import {
  Component,
  Input,
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriaDetalhes } from '../../models/categoria';

@Component({
  selector: 'app-categoria',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './categoria.component.html',
  styleUrl: './categoria.component.css',
})
export class CategoriaComponent {

  @Input({
    required: true,
  })
  public categoria!: CategoriaDetalhes;

}
