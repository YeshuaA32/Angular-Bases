import { Component, OnInit } from "@angular/core";
import { Character } from "../interfaces/character.interface";
import { dbzServices } from "../services/dbz.service";

@Component({
    selector:'app-dbz-main-page',
    templateUrl: './main-page.component.html'
})

export class MainPageComponent {
   constructor( private  dbzServices: dbzServices){


        
   }
   get charaters():Character[] {
    return [...this.dbzServices.characters]
   }

   onDeleteCharacter(id:string):void{
        this.dbzServices.deleteCharacterById(id)
   }
   onNewCharacter(charater:Character){
    this.dbzServices.addCharacter(charater)
   }
}