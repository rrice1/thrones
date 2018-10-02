import{printToDom} from '../helpers/util.js'


const detailsBuilder = (characters) => {
let newString = '';
newString += `<div class="col-6 offset-md-3">`
newString += `<div class="row">`
newString += `<div class="col">`
newString += `<img src="${characters.imageUrl}"/>`
newString += `</div>`
newString += `<div class="col">`
newString += `<h1>${characters.name}</h1>`
newString += `<h3>${characters.house}</h3>`
newString += `</div>`
newString += `</div>`
newString += `</div>`

printToDom(newString);
};



export{detailsBuilder};