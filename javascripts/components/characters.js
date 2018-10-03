import{printToDom} from '../helpers/util.js'
import{detailsBuilder} from './detail.js'



let characters = [];

const setCharacters = (newArray) => {
    characters=newArray;
};

const characterClick = (e) => {
    const characterId=e.target.closest('.character-card').id
    const currentCharacter = characters.find(x=> x.id === characterId)
    detailsBuilder(currentCharacter);
}

const createEvents = () => {
 const characterCards = document.getElementsByClassName('character-card');
 for(let i=0;i<characterCards.length;i++){
     characterCards[i].addEventListener('click',characterClick);
 }
};


let charactersBuilder = () => {
    let newString = '';
    for(let i=0; i<characters.length;i++){
    newString += `<div class="col-2 character-card" id="${characters[i].id}">`
    newString+= `<div class="card">`;
    newString+= `<img class="card-img-top" src="${characters[i].imageUrl}" alt="">`;
    newString+= `<div class="card-body">`;
    newString+= `<h4 class="card-title">${characters[i].name}</h4>`;
    newString+= `</div>`;
    newString+= `</div>`;
    newString+= `</div>`;

    
}
printToDom(newString,'characters');
createEvents();
}

export{charactersBuilder, setCharacters}