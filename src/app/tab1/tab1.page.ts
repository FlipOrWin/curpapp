import { Component } from '@angular/core';
import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/persona';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  providers: [PersonaService]
})
export class Tab1Page {

  
  public personas: Array<Persona>;
  constructor(private _personaService: PersonaService) {}

  ngOnInit() {
    this.getPersonas();
  }

  ionViewWillEnter() {
    this.getPersonas();
  }

  getPersonas() {
    this._personaService.getPersonas().subscribe(
      response => {
        this.personas = response;
        console.log("Response" + response);
        console.log("contact" + this.personas);
      }
    );
  }

  deletePersona(id) {
    this._personaService.delete(id).subscribe(
      response => {
      },
      error => {
        console.log(<any>error);
      }
    );
    this.getPersonas();
  }
}
