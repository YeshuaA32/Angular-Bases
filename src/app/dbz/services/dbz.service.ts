import { Injectable } from "@angular/core";
import { Character } from "../interfaces/character.interface";

import{v4 as uuid} from 'uuid';

@Injectable ({providedIn: 'root'})
export class dbzServices{
   
    public characters: Character[]=[
        {
            id:uuid(),
            name:'Krilin',
            power: 1000
        },{
            id:uuid(),
            name:'Goku',
            power:9800
        },{
            id:uuid(),
            name:'Vegeta',
            power:7500
        }
    ];


    addCharacter(character: Character):void{

        const newcharacter:Character ={
            id:uuid(),
            name: character.name,
            power:character.power
        }


        this.characters.push(character);

        console.log('MainPage')
        console.log(character);
    }

    // ondeleteCharacter(index:number){
    //     this.characters.splice(index,1);
    // }
    deleteCharacterById(id:string){
        this.characters=this.characters.filter(character => character.id !==id);
    }
}