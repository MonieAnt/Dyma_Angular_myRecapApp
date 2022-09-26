export interface Cocktail {
    // Ne s'instancie pas comme une Classe
    // Juste description d'un Object

    name: string;
    img?: string;         // Lien vers url internet sous forme de string
    // ?  pour champ optionnel
    description : string;

}


// AppComponent (app.component.ts) pour déclarer l'interface Cocktail.