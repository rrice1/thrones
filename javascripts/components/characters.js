import{printToDom} from '../helpers/util.js'



const characters = [{id:'character1',name: 'Homer Simpson', house:'Simpson', imageUrl:'https://ksassets.timeincuk.net/wp/uploads/sites/55/2017/03/simpsons-the-great-phatsby-1-920x584.jpg'},
{id:'character2',name: 'Bart Simpson', house:'Simpson', imageUrl:'https://vignette.wikia.nocookie.net/simpsons/images/7/7c/Bart_Simpson_Season_25_Official.jpg/revision/latest?cb=20140511110240'},
{id:'character3',name: 'Lisa Simpson', house:'Simpson', imageUrl:'https://previews.123rf.com/images/chutimakuanamon/chutimakuanamon1706/chutimakuanamon170600318/81156054-lisa-simpson-illustration-cartoon.jpg'},
{id:'character4',name: 'Marge Simpson', house:'Simpson', imageUrl:'https://assets.fxnetworks.com/cms/prod/shows/the-simpsons/photos/simpsons-character/Marge/swsb_character_fact_marge_550x960.png'}]


const characterClick = (e) => {
    const characterId=e.target.closest('.character-card').id
    const currentCharacter = characters.find(x=>{
        return x.id === characterId
    })
    console.log('currentCharacter',currentCharacter);
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

export{charactersBuilder}