import { Component, OnInit, ViewChild } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';
import { PersonaService } from '../../services/persona.service';
import { Persona } from 'src/app/models/Persona';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  providers: [PersonaService]
})
export class Tab2Page {
  public persona: Persona;

  constructor(private _personaService: PersonaService) {}

  ngOnInit() {
    
    // Crear Objeto Coche
    this.persona = new Persona(1, '', '', '', '', '', '', '', null, null);
    
  }

  onSubmit(form){
    console.log(this.persona);
    this._personaService.create(this.persona).subscribe(
      response => {
        console.log(response);
          this.persona = response.persona;
        }
      
    );
  }

  


}
