class Character{
    name;
    constelation;
    element;
    affiliations;
    region;

    constructor(name, constelation, element, affiliations, region){
        this.name = name;
        this.constelation = constelation;
        this.element = element;
        this.affiliations = affiliations;
        this.region = region;
    }
}



function Start(){

    char1 = new Character("Arataki Itto", "Taurus Iracundus", "Geo", "Arataki Gang", "Inazuma");
    char2 = new Character("Yelan", "Umbrabilis Orchis", "Hydro", "Ministry of Civil Affairs", "Liyue");
    char3 = new Character("Cyno", "Lupus Aureus", "Electro", "Temple of Silence", "Sumeru");

    document.getElementById("objects").innerHTML = char1.name + ":" + '\n';
    document.getElementById("objects").innerHTML += JSON.stringify(char1) + '\n' + '\n';
    document.getElementById("objects").innerHTML += char2.name + ":" + '\n';
    document.getElementById("objects").innerHTML += JSON.stringify(char2) + '\n' + '\n';
    document.getElementById("objects").innerHTML += char3.name + ":" + '\n';
    document.getElementById("objects").innerHTML += JSON.stringify(char3) + '\n' + '\n';

    KeysAndValues(char1);
    KeysAndValues(char2);
    KeysAndValues(char3);
}

function KeysAndValues(Character){
    
    //This function takes a character object, sorts its keys and generates a new object with all sorted attributes
    var SortedObject = Object.keys(Character).sort()
    .reduce((accumulator, key) => {
        accumulator[key] = Character[key];
        return accumulator;
    }, {});
    
    document.getElementById("keysValues").innerHTML +=  Character.name   + '\n' + '\n';
    document.getElementById("keysValues").innerHTML += "[" + Object.keys(SortedObject) + "], " + "[" + Object.values(SortedObject)  + "]"  + '\n' + '\n';
}