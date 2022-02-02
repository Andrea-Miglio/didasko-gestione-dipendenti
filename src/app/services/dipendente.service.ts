import { Injectable } from '@angular/core';
import { Dipendente } from '../model/dipendente';

@Injectable()
export class DipendenteService {
  private listaDipendenti: Dipendente[] = [];

  constructor() {}

  inserisci(dipendente: Dipendente) {
    this.listaDipendenti.push(dipendente);
  }

  modificaDipendente() {}

  cancellaDipendente(id: number): void {
    let indice = this.cercaIndice(id);
    this.listaDipendenti.splice(indice, 1);
  }

  leggiDipendente(id: number): Dipendente {
    let indice = this.cercaIndice(id);
    return this.listaDipendenti[indice];
  }

  getListaDipendenti(): Dipendente[] {
    return this.listaDipendenti;
  }

  cercaIndice(id: number): number {
    for (var i = 0; i < this.listaDipendenti.length; i++) {
      if (this.listaDipendenti[i].id == id) {
        break;
      }

      return i;
    }
  }
}
