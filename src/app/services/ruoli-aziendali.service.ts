import { Injectable } from '@angular/core';
import { RuoloAziendale } from '../model/ruolo-aziendale';

@Injectable()
export class RuoliAziendaliService {
  private listaRuoliAziendali: RuoloAziendale[] = [];

  constructor() {}

  inserisci(ruoloAziendale: RuoloAziendale) {
    let id: number = this.listaRuoliAziendali.length + 1;
    ruoloAziendale.id = id;
    this.listaRuoliAziendali.push(ruoloAziendale);
  }

  modificaRuoloAziendale(ruolo:RuoloAziendale) {
    var indice = this.cercaIndice(ruolo.id);
    this.listaRuoliAziendali[indice] = ruolo;
  }

  cancellaRuoloAziendale(id: number): void {
    let indice = this.cercaIndice(id);
    this.listaRuoliAziendali.splice(indice, 1);
  }

  leggiRuoloAziendale(id: number): RuoloAziendale {
    let indice = this.cercaIndice(id);
    return this.listaRuoliAziendali[indice];
  }

  getListaRuoliAziendali(): RuoloAziendale[] {
    return this.listaRuoliAziendali;
  }

  cercaIndice(id: number): number {
    for (var i = 0; i < this.listaRuoliAziendali.length; i++) {
      if (this.listaRuoliAziendali[i].id == id) {
        break;
      }

      return i;
    }
  }
}
