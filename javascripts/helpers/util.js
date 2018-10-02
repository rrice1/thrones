const printToDom = (stringToPrint, divId) => {
    const printHere = document.getElementById(divId);
    printHere.innerHTML = stringToPrint;
  };

  export{printToDom}