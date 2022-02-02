import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RuoliAziendaliService } from '../../services/ruoli-aziendali.service';
import { RuoloAziendale } from '../../model/ruolo-aziendale';

@Component({
  selector: 'app-ruoli-aziendali',
  templateUrl: './ruoli-aziendali.component.html',
  styleUrls: ['./ruoli-aziendali.component.css'],
})
export class RuoliAziendaliComponent implements OnInit {
  listaRuoliAziendali: RuoloAziendale[];
  modifica:boolean = false;
  id:number = 0;

  constructor(private ruoloAziendaleService: RuoliAziendaliService) {
    this.listaRuoliAziendali = ruoloAziendaleService.getListaRuoliAziendali();
  }

  onSubmit(formRuoloAziendale: NgForm) {
    var ruolo: RuoloAziendale = new RuoloAziendale();
    ruolo.ruoloAziendale = formRuoloAziendale.value.ruoloAziendale;
    this.ruoloAziendaleService.inserisci(ruolo);
    formRuoloAziendale.resetForm();
  }

  modificaRuoloAziendale(id:number,formRuoloAziendale: NgForm){
    this.modifica = true;
    this.id = id;
    var ruoloAziendale:string = this.ruoloAziendaleService.leggiRuoloAziendale(id).ruoloAziendale
    formRuoloAziendale.form.controls["ruoloAziendale"].setValue(ruoloAziendale);
  }

  confermaModifica(formRuoloAziendale: NgForm){
    let ruolo:RuoloAziendale = new RuoloAziendale();
    ruolo.id = this.id;
    ruolo.ruoloAziendale = formRuoloAziendale.value.ruoloAziendale
    this.ruoloAziendaleService.modificaRuoloAziendale(ruolo);

  }

  cancellaRuoloAziendale(id:number){
    this.ruoloAziendaleService.cancellaRuoloAziendale(id);

  }

  ngOnInit() {}
}
