import { Injectable } from '@angular/core';
import { TitoliStudio } from '../model/titoli-studio';

@Injectable()
export class TitoloStudioService {
  private listaTitoliStudio: TitoliStudio[] = [];

  constructor() {}

  inserisci(titoliStudio: TitoliStudio) {
    this.listaTitoliStudio.push(titoliStudio);
  }

  modificaTitoloStudio() {}

  cancellaTitoloStudio(id: number): void {
    let indice = this.cercaIndice(id);
    this.listaTitoliStudio.splice(indice, 1);
  }

  leggiTitoloStudio(id: number): TitoliStudio {
    let indice = this.cercaIndice(id);
    return this.listaTitoliStudio[indice];
  }

  getListaTitoloStudio(): TitoliStudio[] {
    return this.listaTitoliStudio;
  }

  cercaIndice(id: number): number {
    for (var i = 0; i < this.listaTitoliStudio.length; i++) {
      if (this.listaTitoliStudio[i].id == id) {
        break;
      }

      return i;
    }
  }
}
