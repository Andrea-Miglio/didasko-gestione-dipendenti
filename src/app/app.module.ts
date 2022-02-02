import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RuoliAziendaliComponent } from './components/ruoli-aziendali/ruoli-aziendali.component';
import { RuoliAziendaliService } from './services/ruoli-aziendali.service';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, RuoliAziendaliComponent],
  bootstrap: [RuoliAziendaliComponent],
  providers:[RuoliAziendaliService]
})
export class AppModule {}
